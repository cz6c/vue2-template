import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store";
export interface IndexState {}

@Module({ dynamic: true, store, name: "index" })
class Index extends VuexModule implements IndexState {}

export const IndexModule = getModule(Index);
