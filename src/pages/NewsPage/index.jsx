import LatestNews from "../../components/LatestNews";
import { useEffect } from "react";

function NewsPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);
    return (
        <main className="newsPage">
            <LatestNews />
        </main>
    );
}

export default NewsPage;
