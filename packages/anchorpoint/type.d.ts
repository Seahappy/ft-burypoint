export type OptionsInter = {
    url: string,
    defaultPath: string,
    visAreaThreshold?: number
}

export type BindInter = {
    arg: string
    value: {
        url?: string
    }
}

export type SubVisiblePageInter = {
    [K in number]: Function
}

export type FtElement = Element & {
    BPVEId: number
}

export type FtHistory = History & {
    [key: string]: Function
}

export type FtEvent = Event & {
    arguments: IArguments
}