import {enrichAddCardFailEvent} from "./AddCardFailEvent";
import {enrichAddCardSuccessEvent} from "./AddCardSuccessEvent";
import {enrichDeleteCardSuccessEvent} from "./DeleteCardSuccessEvent";
import {enrichExecuteChargeFailEvent} from "./ExecuteChargeFailEvent";
import {enrichExecuteChargeSuccessEvent} from "./ExecuteChargeSuccessEvent";
import {enrichRefundChargeSuccessEvent} from "./RefundChargeSuccessEvent";

const enrich = async (events, api) => {
    events = await enrichAddCardSuccessEvent(
        events,
        {
            collectPhones: api.collectPhones,
            collectCards: api.collectCards
        }
    );

    events = await enrichAddCardFailEvent(
        events,
        {
            collectPhones: api.collectPhones,
        }
    );

    events = await enrichDeleteCardSuccessEvent(
        events,
        {
            collectPhones: api.collectPhones,
            collectCards: api.collectCards
        }
    );

    events = await enrichExecuteChargeSuccessEvent(
        events,
        {
            collectPhones: api.collectPhones,
            collectCards: api.collectCards,
            collectCharges: api.collectCharges
        }
    );

    events = await enrichExecuteChargeFailEvent(
        events,
        {
            collectPhones: api.collectPhones,
            collectCards: api.collectCards,
            collectCharges: api.collectCharges
        }
    );

    events = await enrichRefundChargeSuccessEvent(
        events,
        {
            collectPhones: api.collectPhones,
            collectCards: api.collectCards,
            collectCharges: api.collectCharges
        }
    );

    return events;
};

export default enrich;