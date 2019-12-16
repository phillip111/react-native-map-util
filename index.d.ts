interface Params {
    lon?: number;
    lat?: number;
    address?: string;
}

interface MapTarget {
    title: target;
    url: target;
}

export function getMapList(params?: Params): Promise
export function mapJump(target: MapTarget, params?: Params): void