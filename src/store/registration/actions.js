export const REGISTRATION_CHANGE_EMAIL_TEXT = 'REGISTRATION_CHANGE_EMAIL_TEXT';
export const REGISTRATION_CHANGE_PASSWORD_TEXT = 'REGISTRATION_CHANGE_PASSWORD_TEXT';
export const REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT = 'REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT';

export const AUTH_CHANGE_EMAIL_TEXT = 'AUTH_CHANGE_EMAIL_TEXT';
export const AUTH_CHANGE_PASSWORD_TEXT = 'AUTH_CHANGE_PASSWORD_TEXT';

export const setEmailText = (email) => ({
    type: REGISTRATION_CHANGE_EMAIL_TEXT,
    payload: email
});

export const setPasswordText = (password) => ({
    type: REGISTRATION_CHANGE_PASSWORD_TEXT,
    payload: password
});

export const setRepeatPasswordText = (password) => ({
    type: REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT,
    payload: password
});