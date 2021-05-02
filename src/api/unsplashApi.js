import { createApi } from "unsplash-js";

const unsplash = createApi({
    accessKey: `${process.env.REACT_APP_ACCESSKEY}`
});

export default unsplash;