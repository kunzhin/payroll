import { volume, topSku, volumeIncreasingRatio } from "../../data/bonusScheme";
import {
    INPUT_DAY_WORK,
    INPUT_DAY_WORKED,
    INPUT_SALARY,
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
    STRENGTH_TOTAL_BONUS,
    COVERAGE, STRENGTH_PHOTO_COFFEE, STRENGTH_PHOTO_MAGGI, STRENGTH_PHOTO_PURINA,
} from "../types";

const initialState = {
    salary: 0,
    dayWork: 1,
    dayWorked: 0,
    payoutSalary: 0,
    totalPayout: 0,
    totalBonus:0,
    volumeCoffeeBonus: 0,
    volumeCoffeePercent: 0,
    volumeConfBonus: 0,
    volumeConfPercent: 0,
    volumeCPWBonus: 0,
    volumeCPWPercent: 0,
    volumeFDBonus: 0,
    volumeFDPercent: 0,
    volumePurinaBonus: 0,
    volumePurinaPercent: 0,
    volumeTotalBonus: 0,
    volumeTotalPercent: 0,
    topCoffeeBonus:0,
    topConfBonus: 0,
    topMaggiBonus: 0,
    topCPWBonus: 0,
    topCacaoBonus: 0,
    topPurinaBonus: 0,
    topTotalBonus: 0,
    topCoffeePercent:0,
    topConfPercent: 0,
    topMaggiPercent: 0,
    topCPWPercent: 0,
    topCacaoPercent: 0,
    topPurinaPercent: 0,
    topTotalPercent: 0,
    strengthCoffeeBonus: 0,
    strengthMaggiPurinaBonus: 0,
    strengthCoffeePercent: 0,
    strengthMaggiPercent: 0,
    strengthPurinaPercent: 0,
    strengthTotalBonus: 0,
    coveragePointOfSale: 0,
    coverageBonus: 0,
    coverageRatio: false,
    strengthCoffeePhotoRatio: false,
    strengthMaggiPhotoRatio: false,
    strengthPurinaPhotoRatio: false,
}

const volumeRatioCheck = (percent) => {
    let volumeRatio = 0
    if (percent < 95) {
        volumeRatio = 0
    } else if (percent >= 95 && percent < 100) {
        volumeRatio = volumeIncreasingRatio.total9599
    } else {
        volumeRatio = volumeIncreasingRatio.total100103
    }
    return volumeRatio
}

const topRatioCheck = (percent) => {
    let topRatio = 0
    if (percent < 93) {
        topRatio = 0
    } else if (percent >= 93 && percent <=98){
        topRatio = 0.5
    } else {
        topRatio = 1
    }
    return topRatio
}

export const inputSalaryReducer = (state = initialState, action) => {
    let volumeRatio = 0
    switch (action.type) {
        case INPUT_SALARY:
            return {
                ...state,
                salary: action.amount
            }
        case INPUT_DAY_WORK:
            return {
                ...state,
                dayWork: action.dayWork,
            }
        case INPUT_DAY_WORKED:
            return {
                ...state,
                dayWorked: action.dayWorked,
            }
        case PAYOUT_SALARY:
            const payout = (state.salary / state.dayWork * state.dayWorked).toFixed(2)
            return {
                ...state,
                payoutSalary: payout
            }
        case TOTAL_BONUS:
            let bonus = (
                Number(state.volumeTotalBonus) +
                Number(state.topTotalBonus) +
                Number(state.strengthTotalBonus) +
                Number(state.coverageBonus)
            )
            if (state.coverageRatio) {
                bonus = bonus * 0.7
            }
            if (state.strengthCoffeePhotoRatio) {
                bonus = bonus * 0.9
            }
            if (state.strengthMaggiPhotoRatio || state.strengthPurinaPhotoRatio) {
                bonus = bonus * 0.9
            }
            return {
                ...state,
                totalBonus: bonus
            }
        case TOTAL_PAYOUT:
            const totalPayout = (
                Number(state.payoutSalary) +
                Number(state.totalBonus)
            )
            return {
                ...state,
                totalPayout: totalPayout
            }
        case VOLUME_COFFEE_BONUS:
            const coffeeBonus = (state.payoutSalary * volume.coffee * volumeRatioCheck(action.percent))
            return {
                ...state,
                volumeCoffeeBonus: coffeeBonus,
                volumeCoffeePercent: action.percent
            }
        case VOLUME_CONF_BONUS:
            const confBonus = (state.payoutSalary * volume.confectionary * volumeRatioCheck(action.percent))
            return {
                ...state,
                volumeConfBonus: confBonus,
                volumeConfPercent: action.percent
            }
        case VOLUME_CPW_BONUS:
            const cpwBonus = (state.payoutSalary * volume.cpw * volumeRatioCheck(action.percent))
            return {
                ...state,
                volumeCPWBonus: cpwBonus,
                volumeCPWPercent: action.percent
            }
        case VOLUME_FD_BONUS:
            const fdBonus = (state.payoutSalary * volume.foodDairy * volumeRatioCheck(action.percent))
            return {
                ...state,
                volumeFDBonus: fdBonus,
                volumeFDPercent: action.percent
            }
        case VOLUME_PURINA_BONUS:
            const purinaBonus = (state.payoutSalary * volume.purina * volumeRatioCheck(action.percent))
            return {
                ...state,
                volumePurinaBonus: purinaBonus,
                volumePurinaPercent: action.percent
            }
        case VOLUME_TOTAL:
            if (action.percent) {
                if (action.percent >= 104 && action.percent < 105) {
                    volumeRatio = volumeIncreasingRatio.total103105
                } else if (action.percent >= 105 && action.percent < 115) {
                    volumeRatio = volumeIncreasingRatio.total105115
                } else if (action.percent >= 115 && action.percent < 125) {
                    volumeRatio = volumeIncreasingRatio.total115125
                } else if (action.percent >= 125) {
                    volumeRatio = volumeIncreasingRatio.total125
                } else {
                    volumeRatio = volumeIncreasingRatio.total100103
                }
            } else {
                volumeRatio = 1
            }
            const volumeTotalBonus = (
                (
                    Number(state.volumeCoffeeBonus) +
                    Number(state.volumeConfBonus) +
                    Number(state.volumeCPWBonus) +
                    Number(state.volumeFDBonus) +
                    Number(state.volumePurinaBonus)
                ) * volumeRatio)
            return {
                ...state,
                volumeTotalBonus: volumeTotalBonus,
                volumeTotalPercent: action.percent
            }
        case TOP_COFFEE_BONUS:
            const topCoffeeBonus = (state.payoutSalary * topSku.coffee * topRatioCheck(action.percent))
            return {
                ...state,
                topCoffeeBonus: topCoffeeBonus,
                topCoffeePercent: action.percent
            }
        case TOP_CONF_BONUS:
            const topConfBonus = (state.payoutSalary * topSku.confectionary * topRatioCheck(action.percent))
            return {
                ...state,
                topConfBonus: topConfBonus,
                topConfPercent: action.percent
            }
        case TOP_MAGGI_BONUS:
            const topMaggiBonus = (state.payoutSalary * topSku.culinary * topRatioCheck(action.percent))
            return  {
                ...state,
                topMaggiBonus: topMaggiBonus,
                topMaggiPercent: action.percent
            }
        case TOP_CPW_BONUS:
            const topCPWBonus = (state.payoutSalary * topSku.cpw * topRatioCheck(action.percent))
            return  {
                ...state,
                topCPWBonus: topCPWBonus,
                topCPWPercent: action.percent
            }
        case TOP_CACAO_BONUS:
            const topCacaoBonus = (state.payoutSalary * topSku.cacao * topRatioCheck(action.percent))
            return  {
                ...state,
                topCacaoBonus: topCacaoBonus,
                topCacaoPercent: action.percent
            }
        case TOP_PURINA_BONUS:
            const topPurinaBonus = (state.payoutSalary * topSku.purina * topRatioCheck(action.percent))
            return  {
                ...state,
                topPurinaBonus: topPurinaBonus,
                topPurinaPercent: action.percent
            }
        case TOP_TOTAL_BONUS:
            if (state.topCoffeePercent >= 100 &&
                state.topConfPercent >= 100 &&
                state.topMaggiPercent >= 100 &&
                state.topCPWPercent >= 100 &&
                state.topCacaoPercent >= 100 &&
                state.topPurinaPercent >= 100) {
                const topTotalBonus = (state.payoutSalary * 0.36)
                return {
                    ...state,
                    topTotalBonus: topTotalBonus
                }
            } else {
                const topTotalBonus = (
                    Number(state.topCoffeeBonus) +
                    Number(state.topConfBonus) +
                    Number(state.topMaggiBonus) +
                    Number(state.topCPWBonus) +
                    Number(state.topCacaoBonus) +
                    Number(state.topPurinaBonus)
                )
                return {
                    ...state,
                    topTotalBonus: topTotalBonus
                }
            }
        case STRENGTH_COFFEE:
            let strCoffeeBonus = 0
            if (action.percent >= 100) {
                strCoffeeBonus = state.payoutSalary * 0.1
            }
            return {
                ...state,
                strengthCoffeeBonus: strCoffeeBonus,
                strengthCoffeePercent: action.percent
            }
        case STRENGTH_PHOTO_COFFEE:
            if (action.photoStatus === true) {
                return {
                    ...state,
                    strengthCoffeePhotoRatio: false
                }
            } else {
                return {
                    ...state,
                    strengthCoffeePhotoRatio: true
                }
            }
        case STRENGTH_MAGGI:
            let strMaggiBonus = 0
            if (action.percent >= 110 && state.strengthPurinaPercent >= 100) {
                strMaggiBonus = state.payoutSalary * 0.1
            }
            return {
                ...state,
                strengthMaggiPurinaBonus: strMaggiBonus,
                strengthMaggiPercent: action.percent
            }
        case STRENGTH_PHOTO_MAGGI:
            if (action.photoStatus === true) {
                return {
                    ...state,
                    strengthMaggiPhotoRatio: false
                }
            } else {
                return {
                    ...state,
                    strengthMaggiPhotoRatio: true
                }
            }
        case STRENGTH_PURINA:
            let strPurinaBonus = 0
            if (action.percent >= 100 && state.strengthMaggiPercent >= 110) {
                strPurinaBonus = state.payoutSalary * 0.1
            }
            return {
                ...state,
                strengthMaggiPurinaBonus: strPurinaBonus,
                strengthPurinaPercent: action.percent
            }
        case STRENGTH_PHOTO_PURINA:
            if (action.photoStatus === true) {
                return {
                    ...state,
                    strengthPurinaPhotoRatio: false
                }
            } else {
                return {
                    ...state,
                    strengthPurinaPhotoRatio: true
                }
            }
        case STRENGTH_TOTAL_BONUS:
            const strengthTotalBonus = (
                Number(state.strengthCoffeeBonus) +
                Number(state.strengthMaggiPurinaBonus)
            )
            return {
                ...state,
                strengthTotalBonus: strengthTotalBonus
            }
        case COVERAGE:
            let coverageBonus = 0
            if (action.pointOfSale >= 105) {
                coverageBonus = state.payoutSalary * 0.1
                return {
                    ...state,
                    coverageBonus: coverageBonus,
                    coveragePointOfSale: action.pointOfSale,
                    coverageRatio: false
                }
            } else if (action.pointOfSale >= 98 && action.pointOfSale < 105) {
                coverageBonus = 0
                return {
                    ...state,
                    coverageBonus: coverageBonus,
                    coveragePointOfSale: action.pointOfSale,
                    coverageRatio: false
                }
            } else {
                return {
                    ...state,
                    coveragePointOfSale: action.pointOfSale,
                    coverageRatio: true
                }
            }

        default:
            return state
    }
}