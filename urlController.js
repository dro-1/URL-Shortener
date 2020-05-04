const urlModel = require('./urlModel.js')

const PORT = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || `http:localhost:${PORT}`;

const createLink = async (req,res) =>{
    const { originalURL,uniqueName } = req.body;
    try{
    const nameExists = await urlModel.findOne({ uniqueName })

    if (nameExists){
        return res.status(403).json({message:'This unique name already exists'})
    }
    else{
        const shortURL = baseUrl + '/' + uniqueName;
        url = new urlModel({
            originalURL,
            shortURL,
            uniqueName
        });
        await url.save()
        return res.status(201).json({
            message:'Insertion successful',
            shortURL
        })
    }
    }catch(err){ 
        console.log(err);
        res.status(500).json({error: 'Server Error'})
    }
}

const openLink = async (req,res) =>{
    const { uniqueName } = req.params;
    try{
    const url = await urlModel.findOne({ uniqueName })
    
    if(url){
        return res.redirect(url.originalURL)
    }
    else{
        return res.status(404).json({error:'Not Found'})
    }
    }
    catch(err){ 
        console.log(err);
        res.status(500).json({error: 'Server Error'})
    }    
}

module.exports = {
    createLink,openLink
}