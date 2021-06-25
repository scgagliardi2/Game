import { GROWTH } from "./Growth"

export function SQUARE(n: number) {
    return n * n
}

export function CUBE(n: number) {
    return n * n * n
}
 
export function EXP_SLOW(n: number) {
    return (5 * CUBE(n)) / 4 // (5 * (n)^3) / 4
}

export function EXP_FAST(n: number) {
    return (4 * CUBE(n)) / 5 // (4 * (n)^3) / 5
}

export function EXP_MEDIUM_FAST(n: number) {
    return CUBE(n) // (n)^3
}

export function EXP_MEDIUM_SLOW(n: number) {
    return (6 * CUBE(n)) / 5 - (15 * SQUARE(n)) + (100 * n) - 140   // (6 * (n)^3) / 5 - (15 * (n)^2) + (100 * n) - 140
}

export function EXP_ERRATIC(n: number){                                  
    var ret = (n <= 50) ? (100 - n) * CUBE(n) /  50
        : (n <= 68) ? (150 - n) * CUBE(n) / 100             
        : (n <= 98) ? ((1911 - 10 * n) / 3) * CUBE(n) / 500  
        : (160 - n) * CUBE(n) / 100
    return ret
}

export function EXP_FLUCTUATING(n: number) {                         
    var ret = (n <= 15) ? ((n + 1) / 3 + 24) * CUBE(n) / 50      
        : (n <= 36) ? (n + 14) * CUBE(n) / 50    
        : ((n / 2) + 32)  * CUBE(n) / 50
    return ret
}

export function CalculateExperience(level: number, growth: GROWTH): number {
    if (level < 2) {
        return level
    }

    switch (growth) {
        case GROWTH.ERRATIC:
            return EXP_ERRATIC(level)
        case GROWTH.FAST:
            return EXP_FAST(level)
        case GROWTH.FLUCTUATING:
            return EXP_FLUCTUATING(level)
        case GROWTH.MEDIUM_FAST:
            return EXP_MEDIUM_FAST(level)
        case GROWTH.MEDIUM_SLOW:
            return EXP_MEDIUM_SLOW(level) 
        case GROWTH.SLOW:
            return EXP_SLOW(level)  
    }
}