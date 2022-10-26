import { useState } from "react";
import TextField from '@mui/material/TextField';

const Form = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const HandleBlogAdding = (e) => {
        e.preventDefault();
        const tmp_date = new Date().toISOString().split('T');
        const date = `${tmp_date[0]} ${tmp_date[1]}`;
        const blog = { title, author, body, date }
        setIsLoading(true);
        fetch('http://localhost:8000/blogs',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }
        ).then( () => {
            console.log('formulaire ajouter avec succes.');
            setIsLoading(false);
        })
    }



    return ( 
        <div className="create-blog">
            <form onSubmit={ HandleBlogAdding } className="form">
                <div className="form-group">
                    <label htmlFor="author">Liste des étudiants</label>
                    <select

                        required 
                        className="form-control"
                        id="author"
                        value={author}
                        onChange={ (e) => setAuthor(e.target.value) }>
                        <option value=""></option>
                        <option value="Issa">Issa</option>
                        <option value="Harouna">Harouna</option>
                        <option value="Yacine">Yacine</option>
                        <option value="Zakou">Zakou</option>
                        <option value="Boubacar">Boubacar</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Convention</label>
                    <input 
                        type="text"
                        className="form-control" 
                        id="title"
                        value={title}
                        onChange={ (e) => setTitle(e.target.value) }
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Message</label>
                    <textarea
                    required
                    value={body}
                    defaultValue="Bonjour #NOM_ETUDIANT# #PRENOM_ETUDIANT#,

                    Vous avez suivi #nbHeur# de formation chez FormationPlus.
                    Pouvez-vous nous retourner ce mail avec la pièce jointe signée.
                    
                    Cordialement,
                    FormationPlus"
                    
                    onChange={ (e) => setBody(e.target.value) }
                    className="form-control textarea"
                    id="body" rows="10">
                    </textarea> 
                </div>
                <div className="form-group">
                    { !isLoading && <button type="submit" className="btn-create">insérer</button>}
                    { isLoading && <button type="submit" className="btn-create" disabled>En cour de traitement ...</button>}
                </div>
            </form>
        </div>

     );
}
 
export default Form;
