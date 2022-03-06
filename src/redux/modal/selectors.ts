import { RootState } from "../store";

export const selectIsModalOpen = (state: RootState) => state.modals.isOpen;
