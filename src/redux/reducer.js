import ACTIONS from './action';

const evaluate = state => {
    let {lastOperand, currentOperand, operation} = state;
    let last = parseFloat(lastOperand);
    let current = parseFloat(currentOperand);
    
    let result = '';
    switch(operation) {
        case '+':
            result = last + current;
            break;
        case '-':
            result = last - current;
            break;
        case '*':
            result = last * current;
            break;
        case "/":
            result = last / current;
            break;
    }

    return result.toString();
}

const reducer = (state={
    currentOperand: "",
    lastOperand: "",
    operation: "",
    overwrite: false,
}, action) => {
    switch(action.type) {
        case ACTIONS.ADD_DIGIT:
            if (state.overwrite) 
                return {
                    ...state,
                    currentOperand: action.digit,
                    overwrite: false,
                }
            if (state.currentOperand === '0' && action.digit === '0')
                return state;
            if (state.currentOperand === '0' && action.digit !== '.') 
                return {
                    ...state, 
                    currentOperand: action.digit
                }
            if (action.digit === '.' && state.currentOperand.includes("."))
                return state;
            if (action.digit === '.' && state.currentOperand === '')
                return {
                    ...state,
                    currentOperand: "0."
                }
            return {
                ...state,
                currentOperand: state.currentOperand + action.digit,
            }
        case ACTIONS.DELETE_DIGIT:
            if (state.currentOperand === '') 
                return state;
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            }
        case ACTIONS.CHOOST_OPERATION:
            if (state.lastOperand === '' && state.currentOperand === '')
                return state;
            if (state.lastOperand === '') 
                return {
                    ...state,
                    lastOperand: state.currentOperand,
                    operation: action.operation,
                    currentOperand: "",
                }
            if (state.currentOperand === '')
                return {
                    ...state,
                    operation: action.operation,
                }
            return {
                ...state,
                lastOperand: evaluate(state),
                operation: action.operation,
                currentOperand: '',
            }
        case ACTIONS.CLEAR:
            return {
                ...state,
                currentOperand: '',
                lastOperand: '',
                operation: '',
            }
        case ACTIONS.EVALUATE:
            if (state.lastOperand === '' || state.currentOperand === '' || state.operation === '') 
                return state;
            return {
                ...state,
                currentOperand: evaluate(state),
                operation: '',
                lastOperand: '',
                overwrite: true,
            }
        default:
            return state;
    }
}

export default reducer;