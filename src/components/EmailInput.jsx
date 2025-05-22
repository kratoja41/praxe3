export default function EmailInput({ email, onChange, setError }) {
    const handleBlur = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email.trim()) {
            setError("Email je povinný.");
        } else if (!emailRegex.test(email)) {
            setError("Neplatný formát emailu.");
        } else {
            setError(""); // validní
        }
    };

    return (
        <>
            <label htmlFor="email">
                Email <span className="red">*</span>
            </label>
            <input
                type="text"
                id="email"
                placeholder="Zadejte Váš email"
                value={email}
                onChange={onChange}
                onBlur={handleBlur}
            />
        </>
    );
}
