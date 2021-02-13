import {articles} from '../../../data'


export default function handler({query:{id}},res){
     // req.queru.id
     const filterd=articles.filter(article=>article.id===id);
     if(filterd.length>0)  res.status(200).json(filterd);
     else res.status(404).json({message:`artcile with id ${id} not fornd`});
}