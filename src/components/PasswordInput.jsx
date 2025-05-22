export default function PasswordInput({ password, onChange, setError }) {
    const handleBlur = () => {
        if (!password.trim()) {
            setError("Heslo je povinné.");
        } else {
            setError("");
        }
    };

    return (
        <>
            <label htmlFor="password">
                Heslo <span className="red">*</span>
            </label>
            <input
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={onChange}
                onBlur={handleBlur}
            />
        </>
    );
}
