import * as css from './Contact.module.css';

const Contact = ({ name, number, id, deleteContact }) => {
    return <div className={css.card}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => deleteContact(id)}>Delete</button>
    </div>
}

export default Contact;