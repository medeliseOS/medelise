const Joi = require("joi");

const userValidation = Joi.object({
    firstName: Joi.string().min(3).max(30).required().messages({
        "string.empty": "Please enter the first name",
        "string.min": "Name should be at least 3 characters",
        "string.max": "Name should not exceed 30 characters",
    }),
    lastName: Joi.string().min(3).max(30).required().messages({
        "string.empty": "Please enter the last name",
        "string.min": "Name should be at least 3 characters",
        "string.max": "Name should not exceed 30 characters",
    }),
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.empty': 'Please enter the email',
            'string.email': 'Please enter a valid email',
            'any.required': 'Email is required',
        }),
});

const verifyOTPValidation = Joi.object({
    otp: Joi.string().required().messages({
        "string.empty": "Please enter the otp",
    })
});

const userLogin = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.empty': 'Please enter the email',
            'string.email': 'Please enter a valid email',
            'any.required': 'Email is required',
        }),
    password: Joi.string()
        .min(1)
        .required()
        .messages({
            'string.empty': 'Please enter the password',
            'any.required': 'Password is required',
        }),
    fcmToken: Joi.string()
        .required()
        .messages({
            'string.empty': 'Please enter the fcm token',
            'any.required': 'FCM Token is required',
        }),
});


const emailValidation = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.empty': 'Please enter the email',
            'string.email': 'Please enter a valid email',
            'any.required': 'Email is required',
        })
});

const resetPasswordValidation = Joi.object({
    newPassword: Joi.string()
        .pattern(
            new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        )
        .required()
        .messages({
            'string.empty': 'Please enter the new password',
            'string.pattern.base':
                'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character',
        }),
    confirmPassword: Joi.string()
        .pattern(
            new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        )
        .required()
        .messages({
            'string.empty': 'Please enter the confirm password',
            'string.pattern.base':
                'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character',
        }),
});

const changePasswordValidation = Joi.object({
    oldPassword: Joi.string()
        .pattern(
            new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        )
        .required()
        .messages({
            'string.empty': 'Please enter the old password',
            'string.pattern.base':
                'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character',
        }),
    newPassword: Joi.string()
        .pattern(
            new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        )
        .required()
        .messages({
            'string.empty': 'Please enter the new password',
            'string.pattern.base':
                'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character',
        }),
    confirmPassword: Joi.string()
        .pattern(
            new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        )
        .required()
        .messages({
            'string.empty': 'Please enter the confirm password',
            'string.pattern.base':
                'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character',
        }),
})

const categoryValidation = Joi.object({
    categoryName: Joi.string().min(2).max(30).required().messages({
        "string.empty": "Please enter the category name",
        "string.min": "Name should be at least 2 characters",
        "string.max": "Name should not exceed 30 characters",
    }),
})

module.exports = { userValidation, verifyOTPValidation, userLogin, emailValidation, resetPasswordValidation, changePasswordValidation, categoryValidation };
