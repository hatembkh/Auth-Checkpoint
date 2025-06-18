import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';

const ErrorAff = () => {

    const errors = useSelector(state => state.ErrorReducer)
    return (
        <div>
            {errors.map((el,i,t) => (
                <Alert key={i} variant='danger'>
                    {el.msg}
                </Alert>
            ))}
        </div>
    )
}

export default ErrorAff