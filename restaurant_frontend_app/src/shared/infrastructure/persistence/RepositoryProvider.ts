import RecipeRepository from "../../../Food/domain/RecipeRepository";
import AxiosRecipeRepository from "../../../Food/infrastructure/persistence/AxiosRecipeRepository";
import InventoryRepository from "../../../Inventory/domain/InventoryRepository";
import SupplyRepository from "../../../Inventory/domain/SupplyRepository";
import AxiosInventoryRepository from "../../../Inventory/infrastructure/persistence/AxiosInventoryRepository";
import AxiosSupplyRepository from "../../../Inventory/infrastructure/persistence/AxiosSupplyRepository";
import AuthRepository from "../../../Login/domain/AuthRepository";
import AxiosAuthRepository from "../../../Login/infrastructure/persistence/AxiosAuthRepository";
import OrderRepository from "../../../Orders/domain/OrderRepository";
import AxiosOrderRepository from "../../../Orders/infrastructure/persistence/AxiosOrderRepository";
import AxiosProvider from "../services/AxiosProvider";

export default class RepositoryProvider {
	private static authRepository: AuthRepository;
	private static inventoryRepository: InventoryRepository;
	private static supplyRepository: SupplyRepository;
	private static recipeRepository: RecipeRepository;
	private static orderRepository: OrderRepository;
	static getAuthRepository(): AuthRepository {
		if (!RepositoryProvider.authRepository)
			RepositoryProvider.authRepository = new AxiosAuthRepository(
				AxiosProvider.getBackendAPI()
			);
		return RepositoryProvider.authRepository;
	}
	static getInventoryRepository(): InventoryRepository {
		if (!RepositoryProvider.inventoryRepository)
			RepositoryProvider.inventoryRepository =
				new AxiosInventoryRepository(AxiosProvider.getBackendAPI());
		return RepositoryProvider.inventoryRepository;
	}
	static getSupplyRepository(): SupplyRepository {
		if (!RepositoryProvider.supplyRepository)
			RepositoryProvider.supplyRepository =
				new AxiosSupplyRepository(AxiosProvider.getBackendAPI());
		return RepositoryProvider.supplyRepository;
	}
	static getRecipeRepository(): RecipeRepository {
		if (!RepositoryProvider.recipeRepository)
			RepositoryProvider.recipeRepository =
				new AxiosRecipeRepository(AxiosProvider.getBackendAPI());
		return RepositoryProvider.recipeRepository;
	}
	static getOrderRepository(): OrderRepository {
		if (!RepositoryProvider.orderRepository)
			RepositoryProvider.orderRepository =
				new AxiosOrderRepository(AxiosProvider.getBackendAPI());
		return RepositoryProvider.orderRepository;
	}
}
