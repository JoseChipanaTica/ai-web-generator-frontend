import React, {useState} from "react";
import {useRouter} from "next/router";

const StartupIdeaForm = () => {
    const [idea, setIdea] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        setIdea(e.target.value);
    };

    const fetchAndNavigate = async () => {
        try {
            const response = await fetch('https://ai-website-generator-production.up.railway.app/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({"user_prompt": idea}),
                mode: 'cors'
            },);
            const {_id} = await response.json();
            if (response.ok) {
                router.push({
                    pathname: "/aiGenerated",
                    query: {_id},
                });
            } else {
                // Handle the error
                console.error("Error:", data.message);
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    return (
        <div className="w-2/4 border shadow-2xl p-8 rounded-3xl flex flex-col justify-center items-center">
            <div className="text-center py-10">
                <h1 className="text-slate-800 font-bold">What is your startup idea?</h1>
            </div>
            <textarea
                className="shadow-sm p-4 w-full text-slate-700 font-medium sm:w-4/5 h-60 text-xl md:text-2xl md:py-3 border-gray-600 border rounded-2xl placeholder-slate-400 min-h-[120px] focus:ring-green-500 focus:border-green-500"
                placeholder="Describe your startup idea in a sentence..."
                value={idea}
                onChange={handleChange}
            ></textarea>

            <div className="flex flex-row items-center justify-center mt-4">
                <button
                    className="hover:text-gray-600 hover:bg-gray-300 bg-gray-900 text-white rounded-lg p-2"
                    type="button"
                    onClick={fetchAndNavigate}
                    disabled={!idea}
                >
                    Generate Site
                </button>
            </div>
        </div>
    );
};

export default StartupIdeaForm;
