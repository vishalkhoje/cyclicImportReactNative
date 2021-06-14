
import resolveAutoTrackables from "./utils/resolve-auto-trackables";

export default class AutoTrackables {

    private async resolveEventData(context) {
        return resolveAutoTrackables(context);
    }

    report(context: any): void {
        this.resolveEventData(context)
            .then((eventData) => {
                console.log("resolve auto trackables ", eventData);
            })
            .catch((error) => {
                console.warn("Not able to resolve event data", error);
            });
    }
}
