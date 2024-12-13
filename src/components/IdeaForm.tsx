import { useState } from 'react';

interface Idea {
    title: string;
    description: string;
    category: string;
}


interface IdeaFormProps {
    onSubmit: (newIdea: Idea) => void;
}


const IdeaForm = ({ onSubmit }: IdeaFormProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, description, category });
        setTitle('');
        setDescription('');
        setCategory('');
      };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="block">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>

            <div>
                <label className="block">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>

            <div>
                <label className="block">Category</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded w-full"
            >
                Submit Idea
            </button>
        </form>
    );
};

export default IdeaForm;
