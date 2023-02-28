import { Props } from "../core/Block";

const validation: (
  field: HTMLInputElement,
  props: Props
) => boolean | undefined = (field: HTMLInputElement, props: Props) => {
  const { name, value, classList } = field;
  if (!name || undefined) return;
  const re = /^\s*$/;
  if (re.test(value)) {
    props[name].setProps({
      inputClass: classList + " error",
      inputValue: value,
      inputInvalid: "it can't be empty",
    });
    return false;
  }
  if (name === "inputName" || name === "inputScdName") {
    if (!nameValidation(value)) {
      props[name].setProps({
        inputClass: "error",
        inputValue: value,
        inputInvalid: "only latin",
      });
      return false;
    }
  }
  if (name === "inputLogin") {
    if (!nameValidation(value, 6, 20)) {
      props[name].setProps({
        inputClass: "error",
        inputValue: value,
        inputInvalid: "only latin and at least 6 symbols",
      });
      return false;
    }
  }

  if (name === "inputPassword" || name === "inputPasswordScd") {
    if (!passValidation(value, 8, 40)) {
      props[name].setProps({
        inputClass: "error",
        inputValue: value,
        inputInvalid: "only latin and at least 8 symbols",
      });
      return false;
    }
  }

  if (name === "inputMail") {
    if (!mailValidation(value)) {
      props[name].setProps({
        inputClass: "error",
        inputValue: value,
        inputInvalid: "it requires '@' and '.'",
      });
      return false;
    }
  }

  if (name === "inputPhone") {
    if (!phoneValidation(value)) {
      props[name].setProps({
        inputClass: "error",
        inputValue: value,
        inputInvalid: "only digit and symbols",
      });
      return false;
    }
  }
  const passwords = Array.from(
    document.querySelectorAll(
      "input[name=inputPassword], input[name=inputPasswordScd]"
    )
  );
  if (passwords.length > 1 && field === passwords[passwords.length - 1]) {
    if (
      !passwordsEqualValidation(
        (passwords[passwords.length - 2] as HTMLInputElement).value,
        (passwords[passwords.length - 1] as HTMLInputElement).value
      )
    ) {
      props[name].setProps({
        inputClass: "error",
        inputValue: value,
        inputInvalid: "passwords are unequal",
      });
      return false;
    }
  }

  props[name].setProps({
    inputClass: classList,
    inputValue: value,
    inputInvalid: "",
  });
  return true;
};

function mailValidation(email: string): boolean {
  const re = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  return re.test(email);
}

function nameValidation(name: string, min = 0, max = 40): boolean {
  const re = /^[a-zA-Z]+$/;
  return re.test(name) && name.length >= min && name.length <= max;
}

function passValidation(pass: string, min: number, max: number): boolean {
  return pass.length >= min && pass.length <= max;
}

function phoneValidation(phone: string): boolean {
  const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/;
  return re.test(phone);
}

function passwordsEqualValidation(
  password: string,
  passwordScd: string
): boolean {
  return passwordScd === password;
}

export default validation;
