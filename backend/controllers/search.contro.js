
import { User } from "../db/models/user.model.js";
import { tmdb } from "../services/tmdb.service.js";



export async function srch(req,res) {
    const {type,query}=req.params;

    try {

        const response = await tmdb(`https://api.themoviedb.org/3/search/${type}?query=${query}&include_adult=false&language=en-US&page=1` )
 
        if (response.results.length === 0) {
			return res.status(404).send('fff');
		}

        const cleanedResult = response.results.map((item) => ({
            id: item.id,
            image: item.profile_path || item.poster_path || null, 
            title: item.title || item.name || null, 
            searchType: type,
            createdAt: new Date(),
        }));

        await User.findByIdAndUpdate(req.user._id, {
            $push: { searchHistory: cleanedResult[0] }, 
        });


        

        res.status(200).json({ success: true, content: response.results });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "error" });

        
    }
}



export async function searchHistory(req, res) {
	try {
		res.status(200).json({ success: true, content: req.user.searchHistory });
	} catch (error) {
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export async function delHistory(req, res) {
	let { id } = req.params;

	id = parseInt(id);

	try {
		await User.findByIdAndUpdate(req.user._id, {
			$pull: {
				searchHistory: { id: id },
			},
		});

		res.status(200).json({ success: true, message: "Item removed from search history" });
	} catch (error) {
		console.log("Error in removeItemFromSearchHistory controller: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}