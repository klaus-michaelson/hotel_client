import ErrorSpan from "../../components/ErrorSpan";
const errorEmail = (email) => {
    if (email && email.search(/_?@_?._?/) == -1)
        return <ErrorSpan text="Email must contain @ and ." />;
};
const errorPhone = (phoneNumber) => {
    if (phoneNumber.search(/[a-zA-Z]/g) != -1)
        return <ErrorSpan text="Only Numbers" />;
};
const errorPass = (password) => {
    if (password.length != 0 && password.length < 8)
        return <ErrorSpan text="password length must be more than 8" />;
};
const errorCoPass = (password, coPassword) => {
    if (coPassword.length != password)
        return <ErrorSpan text="password doesn't match" />;
};
module.exports = {
    errorEmail,
    errorPhone,
    errorPass,
    errorCoPass,
};
