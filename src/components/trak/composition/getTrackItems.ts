import { HOURS_IN_DAY } from '@components/trak/constants'
import { type TrackItem } from '@components/trak/interfaces'

export const getTrackItems = () => {
    const items: Array<TrackItem> = []

    for (let i = 0; i < HOURS_IN_DAY; i++) {
        items.push({
            hour: i
        })
    }

    return items
}
