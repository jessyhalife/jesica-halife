import mixpanel from "mixpanel-browser";
mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN);

let actions = {
    track: (name, props) => {
        mixpanel.track(name, props)
    }
}

export const Mixpanel = actions