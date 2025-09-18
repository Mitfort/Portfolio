import { useState } from "react"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e:any) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData)
    }

  return (
    <section id="contact" className="relative flex items-center c-space mb-20">
        <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary z-20">
            <div className="flex flex-col items-start w-full gap-5 mb-10">
                <h2 className="text-heading">Contact Me</h2>
                <p className="font-normal text-neutral-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores reprehenderit ea ipsa consequuntur veniam quod quibusdam, alias magni asperiores molestiae consequatur, sit enim eius blanditiis fuga obcaecati quasi reiciendis aspernatur!
                </p>
                <form className="w-full">
                    <div className="mb-5">
                        <label htmlFor="name" className="field-label">
                            Full name
                        </label>
                        <input
                            id='name'
                            name="name"
                            type="text"
                            className="field-input field-input-focus"
                            placeholder="John Doe"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="field-label">
                            Email
                        </label>
                        <input
                            id='email'
                            name="email"
                            type="email"
                            className="field-input field-input-focus"
                            placeholder="JohnDoe@gmail.com"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="field-label">
                            Message
                        </label>
                        <textarea
                            id='message'
                            name="message"
                            rows={4}
                            className="field-input field-input-focus"
                            placeholder="Write here.."
                            autoComplete="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button onClick={handleSubmit} type="submit" className="w-full px-1 py-3 text-lg text-center reounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">
                        Send
                    </button>
                </form>
            </div>

        </div>
        <div className="absolute w-full h-full z-10"
            style={{
                backgroundImage:'url(/assets/grid.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom'
            }}
        >

        </div>
    </section>
  )
}
export default Contact