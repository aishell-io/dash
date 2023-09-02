import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Button, CardContent, CircularProgress } from '@mui/material';
import {
    Form,
    required,
    useTranslate,
    useNotify,
    useSafeSetState,
} from 'ra-core';
import useRegister from '../register/useRegister'
//import { TextInput } from '../input';
import { TextInput, fetchUtils, useRedirect } from 'react-admin';

// Validation functions
const confirmPassword = (value: string, allValues: any) => {
    if (value !== allValues.password) {
        return 'ra.validation.password_mismatch';
    }
    return undefined;
};

export const RegisterForm = (props: LoginFormProps) => {
    const { redirectTo, className } = props;
    const [loading, setLoading] = useSafeSetState(false);
    const register = useRegister();
    const translate = useTranslate();
    const notify = useNotify();
    const redirect = useRedirect();

    const submit = (values: FormData) => {
        setLoading(true);
        /*
        register(values, redirectTo)
            .then(() => {
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                notify(
                    typeof error === 'string'
                        ? error
                        : typeof error === 'undefined' || !error.message
                        ? 'ra.auth.sign_in_error'
                        : error.message,
                    {
                        type: 'error',
                        messageArgs: {
                            _:
                                typeof error === 'string'
                                    ? error
                                    : error && error.message
                                    ? error.message
                                    : undefined,
                        },
                    }
                );
            });
        */

        const url = 'https://packdir.com/api/backre/register';
        const options = {
            method: 'POST',
            body: JSON.stringify(values),
        }
        fetchUtils.fetchJson(url, options)
            .then((ret) => {
                setLoading(false);
                redirect('/login');
            })
            .catch(error => {
                setLoading(false);
                notify(
                    typeof error === 'string'
                        ? error
                        : typeof error === 'undefined' || !error.message
                        ? 'ra.auth.sign_in_error'
                        : error.message,
                    {
                        type: 'error',
                        messageArgs: {
                            _:
                                typeof error === 'string'
                                    ? error
                                    : error && error.message
                                    ? error.message
                                    : undefined,
                        },
                    }
                );
            });
    };

    return (
        <StyledForm
            onSubmit={submit}
            mode="onChange"
            noValidate
            className={className}
        >
            <CardContent className={LoginFormClasses.content}>
                <TextInput
                    autoFocus
                    source="email"
                    label={translate('ra.auth.email')}
                    autoComplete="email"
                    validate={required()}
                    fullWidth
                />
                <TextInput
                    source="password"
                    label={translate('ra.auth.password')}
                    type="password"
                    autoComplete="current-password"
                    validate={required()}
                    fullWidth
                />
                <TextInput
                    source="confirm"
                    label={translate('ra.auth.confirm_password')}
                    type="password"
                    autoComplete="current-password"
                    validate={[required(), confirmPassword]}
                    fullWidth
                />

                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={loading}
                    fullWidth
                    className={LoginFormClasses.button}
                >
                    {loading ? (
                        <CircularProgress
                            className={LoginFormClasses.icon}
                            size={19}
                            thickness={3}
                        />
                    ) : (
                        translate('ra.auth.sign_up')
                    )}
                </Button>
            </CardContent>
        </StyledForm>
    );
};

const PREFIX = 'RaRegisterForm';

export const LoginFormClasses = {
    content: `${PREFIX}-content`,
    button: `${PREFIX}-button`,
    icon: `${PREFIX}-icon`,
};

const StyledForm = styled(Form, {
    name: PREFIX,
    overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    [`& .${LoginFormClasses.content}`]: {
        width: 300,
    },
    [`& .${LoginFormClasses.button}`]: {
        marginTop: theme.spacing(2),
    },
    [`& .${LoginFormClasses.icon}`]: {
        margin: theme.spacing(0.3),
    },
}));

export interface LoginFormProps {
    redirectTo?: string;
    className?: string;
}

interface FormData {
    username: string;
    password: string;
}
RegisterForm.propTypes = {
    redirectTo: PropTypes.string,
};
