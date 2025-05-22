export default function LoginButtons() {
    return (
        <>
            <a href="#" className="forgot-password">Zapomenuté heslo</a>

            <button type="submit" className="btn login-btn">
                Přihlásit se
            </button>

            <div className="divider"><span>nebo</span></div>

            <button type="button" className="btn create-account">
                Vytvořit nový účet Moje Amber
            </button>

            <p className="existing-donor">
                Jste náš stávající dárce a nemůžete se přihlásit?
                <a href="#">Klikněte zde</a> a nastavte si heslo.
            </p>
        </>
    );
}
