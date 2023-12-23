import { useNavigation } from "react-router-dom"
import { InfinitySpin } from 'react-loader-spinner'

const Submit = ({ text, className }) => {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

    console.log(navigation);
    return (
        <button type='submit' className={className} disabled={isSubmitting}>
            {isSubmitting ? 'submitting' : text}
        </button>
    )
}

export default Submit