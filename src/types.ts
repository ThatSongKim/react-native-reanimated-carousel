import type { ViewStyle } from 'react-native';
import type { PanGestureHandlerProps } from 'react-native-gesture-handler';
import type { StackAnimationConfig } from './layouts/StackLayout';

interface IHorizontalModeProps {
    /**
     * Carousel Animated transitions.
     * @default 'default'
     */
    mode?: 'default' | 'parallax';
    /**
     * Layout items vertically instead of horizontally
     */
    vertical?: false;
    /**
     * Specified carousel container width.
     */
    width: number;
    height?: number;
}

interface IVerticalModeProps {
    /**
     * Carousel Animated transitions.
     * @default 'default'
     */
    mode?: 'default' | 'parallax';
    /**
     * Layout items vertically instead of horizontally
     */
    vertical: true;
    /**
     * Specified carousel container height.
     * @default '100%'
     */
    height: number;
    width?: number;
}

interface IStackModeProps {
    /**
     * Carousel Animated transitions.
     * @default 'default'
     */
    mode?: 'stack';
    /**
     * Specified carousel container height/width.
     * @default '100%'
     */
    height?: number;
    width?: number;
    /**
     * Stack animation style.
     * @default
     *     mode: 'vertical',
     *     snapDirection: 'right',
     *     moveSize: window.width,
     *     stackInterval: 30,
     *     scaleInterval: 0.08,
     *     rotateZDeg: 135,
     */
    animationConfig?: StackAnimationConfig;
}

export type TCarouselProps<T = any> = {
    ref?: React.Ref<ICarouselInstance>;
    /**
     * Carousel loop playback.
     * @default true
     */
    loop?: boolean;
    /**
     * Carousel items data set.
     */
    data: T[];
    /**
     * Default index
     * @default 0
     */
    defaultIndex?: number;
    /**
     * Auto play
     */
    autoPlay?: boolean;
    /**
     * Auto play
     * @description reverse playback
     */
    autoPlayReverse?: boolean;
    /**
     * Auto play
     * @description playback interval
     */
    autoPlayInterval?: number;
    /**
     * Carousel container style
     */
    style?: ViewStyle;
    /**
     * When use 'default' Layout props,this prop can be control prev/next item offset.
     * @default 100
     */
    parallaxScrollingOffset?: number;
    /**
     * When use 'default' Layout props,this prop can be control prev/next item offset.
     * @default 0.8
     */
    parallaxScrollingScale?: number;
    /**
     * PanGestureHandler props
     */
    panGestureHandlerProps?: Omit<
        Partial<PanGestureHandlerProps>,
        'onHandlerStateChange'
    >;
    /**
     * Determines the maximum number of items will respond to pan gesture events,
     * windowSize={11} will active visible item plus up to 5 items above and 5 below the viewpor,
     * Reducing this number will reduce the calculation of the animation value and may improve performance.
     * @default 0 all items will respond to pan gesture events.
     */
    windowSize?: number;
    pagingEnabled?: boolean;
    enableSnap?: boolean;
    /**
     * Render carousel item.
     */
    renderItem: (data: T, index: number) => React.ReactNode;
    /**
     * Callback fired when navigating to an item
     */
    onSnapToItem?: (index: number) => void;
    /**
     * On scroll begin
     */
    onScrollBegin?: () => void;
    /**
     * On scroll end
     */
    onScrollEnd?: (previous: number, current: number) => void;
    /**
     * On progress change
     * @param offsetProgress Total of offset distance (0 390 780 ...)
     * @param absoluteProgress Convert to index (0 1 2 ...)
     */
    onProgressChange?: (
        offsetProgress: number,
        absoluteProgress: number
    ) => void;
} & (IHorizontalModeProps | IVerticalModeProps | IStackModeProps);

export interface ICarouselInstance {
    /**
     * Play the last one
     */
    prev: () => void;
    /**
     * Play the next one
     */
    next: () => void;
    /**
     * Get current item index
     */
    getCurrentIndex: () => number;
    /**
     * Go to index
     */
    goToIndex: (index: number, animated?: boolean) => void;
}
