const refreshBodyScrollTop = () => {
    const scrollTop = document.scrollingElement.scrollTop;
    document.body.setAttribute("scroll-top", parseInt(scrollTop));
};


export default function ListenScroll() {
    document.addEventListener('scroll', event => {
        refreshBodyScrollTop();
    }, false);
    refreshBodyScrollTop();
}