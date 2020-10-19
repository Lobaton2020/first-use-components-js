function Config(app) {
    const st = app.style;
    st.marginTop = "0px";
    st.padding = "20px";
    if (window.matchMedia("(min-width:720px)").matches) {
        st.paddingLeft = "350px"
        st.paddingRight = "350px"
    }
}

export default Config;
