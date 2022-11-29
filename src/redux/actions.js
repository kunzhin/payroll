import {
    INPUT_SALARY,
    INPUT_DAY_WORK,
    INPUT_DAY_WORKED,
    PAYOUT_SALARY,
    TOTAL_BONUS,
    TOTAL_PAYOUT,
    VOLUME_CONF_BONUS,
    VOLUME_COFFEE_BONUS,
    VOLUME_CPW_BONUS,
    VOLUME_TOTAL,
    VOLUME_PURINA_BONUS,
    VOLUME_FD_BONUS,
    TOP_COFFEE_BONUS,
    TOP_CONF_BONUS,
    TOP_MAGGI_BONUS,
    TOP_CPW_BONUS,
    TOP_CACAO_BONUS,
    TOP_PURINA_BONUS,
    TOP_TOTAL_BONUS,
    STRENGTH_COFFEE,
    STRENGTH_MAGGI,
    STRENGTH_PURINA,
    STRENGTH_PHOTO_COFFEE,
    STRENGTH_PHOTO_MAGGI,
    STRENGTH_PHOTO_PURINA,
    STRENGTH_TOTAL_BONUS,
    COVERAGE,
} from "./types";

export function inputSalary(amount) {
    return {
        type: INPUT_SALARY,
        amount
    }
}

export function inputDayWork(dayWork) {
    return {
        type: INPUT_DAY_WORK,
        dayWork
    }
}

export function inputDayWorked(dayWorked) {
    return {
        type: INPUT_DAY_WORKED,
        dayWorked
    }
}

export function payoutSalary() {
    return {
        type: PAYOUT_SALARY,
    }
}

export function totalBonus() {
    return {
        type: TOTAL_BONUS,
    }
}

export function totalPayout() {
    return {
        type: TOTAL_PAYOUT,
    }
}

export function inputVolCoffeePercent(percent) {
    return {
        type: VOLUME_COFFEE_BONUS,
        percent
    }
}

export function inputVolConfPercent(percent) {
    return {
        type: VOLUME_CONF_BONUS,
        percent
    }
}

export function inputVolCPWPercent(percent) {
    return {
        type: VOLUME_CPW_BONUS,
        percent
    }
}

export function inputVolFDPercent(percent) {
    return {
        type: VOLUME_FD_BONUS,
        percent
    }
}

export function inputVolPurinaPercent(percent) {
    return {
        type: VOLUME_PURINA_BONUS,
        percent
    }
}

export function inputVolTotalPercent(percent) {
    return {
        type: VOLUME_TOTAL,
        percent
    }
}

export function inputTopCoffeePercent(percent) {
    return {
        type: TOP_COFFEE_BONUS,
        percent
    }
}

export function inputTopConfPercent(percent) {
    return {
        type: TOP_CONF_BONUS,
        percent
    }
}

export function inputTopMaggiPercent(percent) {
    return {
        type: TOP_MAGGI_BONUS,
        percent
    }
}

export function inputTopCPWPercent(percent) {
    return {
        type: TOP_CPW_BONUS,
        percent
    }
}

export function inputTopCacaoPercent(percent) {
    return {
        type: TOP_CACAO_BONUS,
        percent
    }
}

export function inputTopPurinaPercent(percent) {
    return {
        type: TOP_PURINA_BONUS,
        percent
    }
}

export function topTotalBonus() {
    return {
        type: TOP_TOTAL_BONUS
    }
}

export function inputStrengthCoffeePercent(percent) {
    return {
        type: STRENGTH_COFFEE,
        percent
    }
}

export function inputStrengthMaggiPercent(percent) {
    return {
        type: STRENGTH_MAGGI,
        percent
    }
}

export function inputStrengthPurinaPercent(percent) {
    return {
        type: STRENGTH_PURINA,
        percent
    }
}

export function switchStrengthPhotoCoffee(photoStatus) {
    return {
        type: STRENGTH_PHOTO_COFFEE,
        photoStatus
    }
}

export function switchStrengthPhotoMaggi(photoStatus) {
    return {
        type: STRENGTH_PHOTO_MAGGI,
        photoStatus
    }
}
export function switchStrengthPhotoPurina(photoStatus) {
    return {
        type: STRENGTH_PHOTO_PURINA,
        photoStatus
    }
}

export function strengthTotalBonus() {
    return {
        type: STRENGTH_TOTAL_BONUS,
    }
}

export function inputCoverage(pointOfSale) {
    return {
        type: COVERAGE,
        pointOfSale
    }
}