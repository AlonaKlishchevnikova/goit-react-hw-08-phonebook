import styled from './home-page.module.css'
const HomePage = () => {
    return (
        <div className={styled.wrapper}>
            <h2>Welcome to the Phonebook</h2>
            <p className={styled.text}>This application is designed to store and organize user contacts.
            To get started, you need to register if you are a new user or log in to an existing account.</p>

        </div>
    )
    
}
export default HomePage;