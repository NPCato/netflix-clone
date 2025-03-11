import { tmdb } from "../services/tmdb.service.js";

export async function getTrend(req, res) {
    try {
        const { type } = req;
        const data = await tmdb(`https://api.themoviedb.org/3/trending/${type}/day?language=en-US`);

        if (!data?.results || data.results.length === 0) {
            return res.status(404).json({ success: false, message: "no trending " });
        }

        const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
        return res.json({ success: true, content: randomMovie });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "error te3 shkpi" });
    }
}

export async function getTrailers(req, res) {
    try {
        const { type, id } = req;
        const data = await tmdb(`https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`);

        if (!data?.results || data.results.length === 0) {
            return res.status(404).json({ success: false, message: "no trailers" });
        }

        return res.json({ success: true, trailers: data.results });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "error te3 shkpi" });
    }
}

export async function getDetails(req, res) {
    try {
        const { type, id } = req;
        const data = await tmdb(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`);

        if (!data) {
            return res.status(404).json({ success: false, message: "no details " });
        }

        return res.json({ success: true, details: data });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "error te3 shkpi" });
    }
}

export async function similarMovies(req, res) {
    try {
        const { type, id } = req;
        const data = await tmdb(`https://api.themoviedb.org/3/${type}/${id}/similar?language=en-US&page=1`);

        if (!data?.results || data.results.length === 0) {
            return res.status(404).json({ success: false, message: "no similar movies " });
        }

        return res.json({ success: true, movies: data.results });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "error te3 shkpi" });
    }
}

export async function moviesCategory(req, res) {
    try {
        const { type, category } = req;
        const data = await tmdb(`https://api.themoviedb.org/3/${type}/${category}?language=en-US&page=1`);

        if (!data?.results || data.results.length === 0) {
            return res.status(404).json({ success: false, message: "movies oulash" });
        }

        return res.json({ success: true, movies: data.results });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "error te3 shkpi" });
    }
}
