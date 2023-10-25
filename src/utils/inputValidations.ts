export const validateInput = (inputText: string, type: 'password' | 'login') => {
    const patterns = {
        password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,72}$/,
        login: /^[A-Za-z0-9]{3,50}$/,
    };

    const isValid = patterns[type].test(inputText);

    return isValid;
}