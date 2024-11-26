 // Form aur output elements ko DOM se get karo
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement | null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement | null;

// Resume generate karne ka function
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Default form submission ko roko

        // Form se values lo
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const description = (document.getElementById('description') as HTMLInputElement).value;

        // Check karo ke sab fields bhari hui hain
        if (!name || !email || !phone || !education || !experience || !skills || !description) {
            alert('Please fill in all fields');
            return; // Agar koi field empty hai to function ko rok do
        }

        // Resume ke liye HTML generate karo
        const resumeHTML = `
            <h2>Generated Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Education:</strong> ${education}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Skills:</strong> ${skills}</p>
            <p><strong>Description:</strong> ${description}</p>
        `;

        // Generated resume ko output div mein dikhayein
        resumeOutput.innerHTML = resumeHTML;
    });
} else {
    console.error('Form ya Output div DOM mein nahi milay');
}