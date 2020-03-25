import React from 'react';

export default class CreatorModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToolTipVisible: false,
            email: null,
            password: null,
            emailErr: null,
            passwordErr: null,
            emailBlur: false,
            passwordBlur: false,
            isValidEmail: null,
            isValidPassword: null,
            inputFocused: false,
            classEmail: 'jcc-email-pw-label',
            classPassword: 'jcc-email-pw-label',
            emailStatus: 'jcc-input',
            passwordStatus: 'jcc-input',
            isBoxChecked: null
        }

        this.resetModal = this.resetModal.bind(this);
        this.showToolTip = this.showToolTip.bind(this);
        this.hideToolTip = this.hideToolTip.bind(this);
        this.changeEmailPos = this.changeEmailPos.bind(this);
        this.changePasswordPos = this.changePasswordPos.bind(this);
        this.returnEmailPos = this.returnEmailPos.bind(this);
        this.returnPasswordPos = this.returnPasswordPos.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.setEmailBlurFalse = this.setEmailBlurFalse.bind(this);
        this.setEmailErr = this.setEmailErr.bind(this);
        this.setPasswordErr = this.setPasswordErr.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.checkSuccessEmail = this.checkSuccessEmail.bind(this);
        this.onInput = this.onInput.bind(this);
        this.outOfInput = this.outOfInput.bind(this);
        this.setEmailBlurTrue = this.setEmailBlurTrue.bind(this);
        this.checkSuccessPassword = this.checkSuccessPassword.bind(this);
        this.renderGreenCheckPassword = this.renderGreenCheckPassword.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.setPasswordBlurTrue = this.setPasswordBlurTrue.bind(this);
        this.setPasswordBlurFalse = this.setPasswordBlurFalse.bind(this);
        this.checkBox = this.checkBox.bind(this);
        this.setPasswordBlurFalse = this.setPasswordBlurFalse.bind(this);
        this.uncheckBox = this.uncheckBox.bind(this);
        this.onSignupClick = this.onSignupClick.bind(this);
    }

    onInput() {
        this.setState({
            inputFocused: true
        })
    }

    outOfInput() {
        this.setState({
            inputFocused: false
        })
    }

    showToolTip() {
        this.setState({
            isToolTipVisible: !this.state.isToolTipVisible
        })
    }

    hideToolTip() {
        this.setState({
            isToolTipVisible: false
        })
    }

    changeEmailPos() {
        if (this.state.email === null) {
            this.setState({
                classEmail: 'jcc-email-pw-label-change',
                email: ''
            })
        } else {
            this.setState({
                classEmail: 'jcc-email-pw-label-change',
            })
        }
    }

    changePasswordPos() {
        if (this.state.password === null) {
            this.setState({
                classPassword: 'jcc-email-pw-label-change',
                password: ''
            })
        } else {
            this.setState({
                classPassword: 'jcc-email-pw-label-change'
            })
        }
    }

    returnEmailPos() {
        if (this.state.email === null || this.state.email.length === 0) {
            this.setState({
                classEmail: 'jcc-email-pw-label'
            })
        }
    }

    returnPasswordPos() {
        if (this.state.password === null || this.state.password.length === 0) {
            this.setState({
                classPassword: 'jcc-email-pw-label'
            })
        }
    }

    changeInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setEmailBlurTrue() {
        this.setState({
            emailBlur: true
        })
    }

    setPasswordBlurTrue() {
        this.setState({
            passwordBlur: true
        })
    }

    setEmailBlurFalse() {
        this.setState({
            emailBlur: false
        })
    }

    setPasswordBlurFalse() {
        this.setState({
            passwordBlur: false
        })
    }

    setEmailErr() {
        setTimeout(() => {
            if (this.state.email !== null && this.state.email.length === 0 && this.state.emailBlur === true) {
                this.setState({
                    emailErr: true,
                    emailStatus: 'jcc-input-error'
                })
            }
        }, 0)
    }

    setPasswordErr() {
        setTimeout(() => {
            if (this.state.password !== null && this.state.password.length === 0 && this.state.passwordBlur === true) {
                this.setState({
                    passwordErr: true,
                    passwordStatus: 'jcc-input-error'
                })
            }
        }, 0)
    }


    renderRedXEmail() {
        if (this.state.emailErr === true || this.state.isValidEmail === false) {
            return (
                <div className="red-x-container">
                    <div className="red-x"></div>
                </div>
            )
        }
    }

    renderRedXPassword() {
        if (this.state.passwordErr === true || this.state.isValidPassword === false) {
            return (
                <div className="red-x-container">
                    <div className="red-x"></div>
                </div>
            )
        }
    }

    checkEmptyEmail() {
        if (this.state.email !== null && this.state.email.length === 0 && this.state.emailBlur === true && this.state.emailErr === true && this.state.inputFocused === false) {
            return (
                <div className="email-pw-error">
                    Please enter a valid e-mail address
                </div>
            )
        } else if (this.state.isValidEmail === false && this.state.inputFocused === false) {
            return (
                <div className="email-pw-error">
                    This email is invalid
                </div>
            )
        }
    }

    checkEmptyPassword() {
        if (this.state.password !== null && this.state.password.length === 0 && this.state.passwordBlur === true && this.state.passwordErr === true) {
            return (
                <div className="email-pw-error">
                    Please enter a password
                </div>
            )
        } else if (this.state.isValidPassword === false && this.state.inputFocused === false) {
            return (
                <div className="email-pw-error">
                    Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters
                </div>
            )
        }
    }

    validateEmail() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            this.setState({
                isValidEmail: true
            })
        } else {
            this.setState({
                isValidEmail: false
            })
        }
    }

    validatePassword() {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(this.state.password)) {
            this.setState({
                isValidPassword: true
            })
        } else {
            this.setState({
                isValidPassword: false
            })
        }
    }

    checkSuccessEmail() {
        setTimeout(() => {
            if (this.state.isValidEmail === true) {
                this.setState({
                    emailStatus: 'jcc-input-success'
                })
            } else {
                this.setState({
                    emailStatus: 'jcc-input-error'
                })
            }
        }, 0)
    }

    checkSuccessPassword() {
        setTimeout(() => {
            if (this.state.isValidPassword === true) {
                this.setState({
                    passwordStatus: 'jcc-input-success'
                })
            } else {
                this.setState({
                    passwordStatus: 'jcc-input-error'
                })
            }
        }, 0)
    }

    renderGreenCheckEmail() {
        if (this.state.isValidEmail === true) {
            return (
                <div className="green-check-container">
                    <div className="green-check"></div>
                </div>
            )
        }
    }

    renderGreenCheckPassword() {
        if (this.state.isValidPassword === true) {
            return (
                <div className="green-check-container">
                    <div className="green-check"></div>
                </div>
            )
        }
    }

    resetModal() {
        this.setState({
            isToolTipVisible: false,
            email: null,
            password: null,
            emailStatus: 'jcc-input',
            passwordStatus: 'jcc-input',
            emailErr: null,
            passwordErr: null,
            emailBlur: false,
            passwordBlur: false,
            isValidEmail: null,
            isValidPassword: null,
            isBoxChecked: null
        })
        setTimeout(this.returnEmailPos, 0)
        setTimeout(this.returnPasswordPos, 0)
    }

    renderToolTip() {
        if (this.state.isToolTipVisible === true) {
            return (
                <div className="age-q-tooltip-container" onClick={e => e.stopPropagation()}>
                    <div className="age-q-tooltip-inner">
                        <span>
                            <span>
                                adidas requires minimum age confirmation in accordance with the <a>Terms &amp; Conditions</a>.
                            </span>
                        </span>
                    </div>
                    <div className="age-q-tooltip-arrow"></div>
                </div>
            )
        } else {
            return null;
        }
    }

    checkBox() {
        if (this.state.isBoxChecked === null) {
            this.setState({
                isBoxChecked: true,
            })
        } else if (this.state.isBoxChecked === false) {
            this.setState({
                isBoxChecked: true,
            })
        }
    }

    uncheckBox() {
        if (this.state.isBoxChecked === true) {
            this.setState({
                isBoxChecked: false,
            })
        }
    }

    fillCheckbox() {
        if (this.state.isBoxChecked === true) {
            return (
                <img src="https://img.icons8.com/material-sharp/24/000000/checked-checkbox.png" />
            )
        }
    }

    renderCheckboxErr() {
        if (this.state.isBoxChecked === false) {
            return (
                <div className="age-error">
                    You are too young to register / order
                </div>
            )
        }
    }

    onSignupClick() {
        if (this.state.email === null) {
            this.setState({
                email: '',
                emailBlur: true,
                emailErr: true
            })
        }

        if (this.state.password === null) {
            this.setState({
                password: '',
                passwordBlur: true,
                passwordErr: true
            })
        }

        if (this.state.isBoxChecked === null) {
            this.setState({
                isBoxChecked: false
            })
        }
    }


    render() {
        if (this.props.isModalVisible === true) {
            return (
                <div className="modal" onClick={() => { this.props.hideModal(); this.resetModal(); }}>
                    <div className="join-creators-club-modal-container">
                        <div className="join-creators-club-modal" onClick={e => { e.stopPropagation(); this.hideToolTip() }}>
                            <div className="join-creators-club-content">
                                <h4>JOIN OUR CREATORS CLUB FOR FREE AND GET A WELCOME GIFT</h4>
                                <form autoComplete="off">
                                    <div className="jcc-email-pw">
                                        <input name="email"
                                            type="email"
                                            className={this.state.emailStatus}
                                            onFocus={() => { this.changeEmailPos(); this.setEmailBlurFalse(); this.onInput(); }}
                                            onBlur={() => { this.returnEmailPos(); this.setEmailBlurTrue(); this.setEmailErr(); this.outOfInput(); this.validateEmail(); this.checkSuccessEmail(); }}
                                            onChange={(e) => { this.changeInput(e); }} />
                                        <label className={this.state.classEmail}>
                                            EMAIL
                                        </label>
                                        {this.checkEmptyEmail()}
                                        {this.renderRedXEmail()}
                                        {this.renderGreenCheckEmail()}
                                    </div>
                                    <div className="jcc-email-pw">
                                        <input name="password"
                                            type="password"
                                            className={this.state.passwordStatus}
                                            onFocus={() => { this.changePasswordPos(); this.setPasswordBlurFalse(); this.onInput(); }}
                                            onBlur={() => { this.returnPasswordPos(); this.setPasswordBlurTrue(); this.setPasswordErr(); this.outOfInput(); this.validatePassword(); this.checkSuccessPassword(); }}
                                            onChange={this.changeInput} />
                                        <label className={this.state.classPassword}>
                                            PASSWORD
                                        </label>
                                        {this.checkEmptyPassword()}
                                        {this.renderRedXPassword()}
                                        {this.renderGreenCheckPassword()}
                                    </div>
                                    <div>
                                        <div className="age-check">
                                            <div className="age-box-text-container">
                                                <div className="age-box-text">
                                                    <label className={this.state.classCheckbox}>
                                                        <input type="checkbox" name="ageConfirmation" />
                                                        <div className="checkbox-icon" onClick={() => { this.checkBox(); this.uncheckBox(); }}>
                                                            {this.fillCheckbox()}
                                                        </div>
                                                        <span onClick={() => { this.checkBox(); this.uncheckBox(); }}>
                                                            Yes, I am 13+ years old.
                                                        </span>
                                                    </label>
                                                    {this.renderCheckboxErr()}
                                                </div>
                                            </div>
                                            <div className="age-question">
                                                <button type="button" onClick={(e) => { this.showToolTip(); e.stopPropagation(); }}>
                                                    Why does it matter?
                                                </button>
                                                {this.renderToolTip()}
                                            </div>
                                        </div>
                                        <div className="jcc-signup-container">
                                            <button type="button" className="black-signup" onClick={this.onSignupClick}>
                                                <span>SIGN UP --></span>
                                            </button>
                                        </div>
                                        <div className="jcc-signup-spacer"></div>
                                        <span>
                                            By clicking 'Sign Up' you agree to the <a className="jcc-creators-terms">Creators Club Terms &amp; Conditions</a>, adidas <a className="jcc-adidas-terms">Terms &amp; Conditions</a> and the adidas <a className="jcc-adidas-privacy">Privacy Policy</a>.
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-close" onClick={() => { this.props.hideModal(); this.resetModal(); }}>
                            <div className="black-x"></div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}