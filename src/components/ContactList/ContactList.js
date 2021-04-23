const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        const { id, name, number } = contact;
        return (
          <li key={id}>
            {name}: {number}
            <button onClick={() => onDelete(id)} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
