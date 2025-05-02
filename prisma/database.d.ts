export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type Database = {
	graphql_public: {
		Tables: {
			[_ in never]: never;
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			graphql: {
				Args: {
					operationName?: string;
					query?: string;
					variables?: Json;
					extensions?: Json;
				};
				Returns: Json;
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
	public: {
		Tables: {
			Bet: {
				Row: {
					away: string;
					can_draw: boolean;
					createdAt: string;
					home: string;
					id: number;
					league_id: number;
					match_id: string;
					result_away: number | null;
					result_home: number | null;
					slug: string;
					startTime: string;
					status: Database["public"]["Enums"]["BetStatus"];
				};
				Insert: {
					away: string;
					can_draw?: boolean;
					createdAt?: string;
					home: string;
					id?: number;
					league_id: number;
					match_id: string;
					result_away?: number | null;
					result_home?: number | null;
					slug: string;
					startTime: string;
					status?: Database["public"]["Enums"]["BetStatus"];
				};
				Update: {
					away?: string;
					can_draw?: boolean;
					createdAt?: string;
					home?: string;
					id?: number;
					league_id?: number;
					match_id?: string;
					result_away?: number | null;
					result_home?: number | null;
					slug?: string;
					startTime?: string;
					status?: Database["public"]["Enums"]["BetStatus"];
				};
				Relationships: [
					{
						foreignKeyName: "Bet_league_id_fkey";
						columns: ["league_id"];
						isOneToOne: false;
						referencedRelation: "GameLeage";
						referencedColumns: ["id"];
					},
				];
			};
			GameLeage: {
				Row: {
					active: boolean;
					game: Database["public"]["Enums"]["GameType"];
					id: number;
					leage_id: string | null;
				};
				Insert: {
					active?: boolean;
					game: Database["public"]["Enums"]["GameType"];
					id?: number;
					leage_id?: string | null;
				};
				Update: {
					active?: boolean;
					game?: Database["public"]["Enums"]["GameType"];
					id?: number;
					leage_id?: string | null;
				};
				Relationships: [];
			};
			Setting: {
				Row: {
					id: number;
					setting_type: Database["public"]["Enums"]["SettingsType"];
					setting_value: string;
				};
				Insert: {
					id?: number;
					setting_type: Database["public"]["Enums"]["SettingsType"];
					setting_value: string;
				};
				Update: {
					id?: number;
					setting_type?: Database["public"]["Enums"]["SettingsType"];
					setting_value?: string;
				};
				Relationships: [];
			};
			Store: {
				Row: {
					createdAt: string;
					credit: number;
					description: string;
					id: string;
					name: string;
					owner_id: string | null;
					slogan: string | null;
					updatedAt: string;
				};
				Insert: {
					createdAt?: string;
					credit?: number;
					description: string;
					id: string;
					name: string;
					owner_id?: string | null;
					slogan?: string | null;
					updatedAt: string;
				};
				Update: {
					createdAt?: string;
					credit?: number;
					description?: string;
					id?: string;
					name?: string;
					owner_id?: string | null;
					slogan?: string | null;
					updatedAt?: string;
				};
				Relationships: [
					{
						foreignKeyName: "Store_owner_id_fkey";
						columns: ["owner_id"];
						isOneToOne: false;
						referencedRelation: "User";
						referencedColumns: ["id"];
					},
				];
			};
			StoreDiscount: {
				Row: {
					discount: number;
					from_date: string;
					id: number;
					product_id: number;
					to_date: string | null;
				};
				Insert: {
					discount: number;
					from_date: string;
					id?: number;
					product_id: number;
					to_date?: string | null;
				};
				Update: {
					discount?: number;
					from_date?: string;
					id?: number;
					product_id?: number;
					to_date?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "StoreDiscount_product_id_fkey";
						columns: ["product_id"];
						isOneToOne: false;
						referencedRelation: "StoreProduct";
						referencedColumns: ["id"];
					},
				];
			};
			StoreProduct: {
				Row: {
					available: boolean;
					createdAt: string;
					description: string | null;
					id: number;
					name: string;
					store_id: string;
					type: Database["public"]["Enums"]["ProductType"];
					value: number;
				};
				Insert: {
					available?: boolean;
					createdAt?: string;
					description?: string | null;
					id?: number;
					name: string;
					store_id: string;
					type: Database["public"]["Enums"]["ProductType"];
					value: number;
				};
				Update: {
					available?: boolean;
					createdAt?: string;
					description?: string | null;
					id?: number;
					name?: string;
					store_id?: string;
					type?: Database["public"]["Enums"]["ProductType"];
					value?: number;
				};
				Relationships: [
					{
						foreignKeyName: "StoreProduct_store_id_fkey";
						columns: ["store_id"];
						isOneToOne: false;
						referencedRelation: "Store";
						referencedColumns: ["id"];
					},
				];
			};
			Suscription: {
				Row: {
					createdAt: string;
					currency: Database["public"]["Enums"]["Currency"];
					endTime: string;
					id: number;
					startTime: string;
					store_id: string | null;
					total: number;
					type: Database["public"]["Enums"]["SuscriptionType"];
					user_id: string | null;
					user_type: Database["public"]["Enums"]["UserType"] | null;
				};
				Insert: {
					createdAt?: string;
					currency: Database["public"]["Enums"]["Currency"];
					endTime: string;
					id?: number;
					startTime: string;
					store_id?: string | null;
					total: number;
					type: Database["public"]["Enums"]["SuscriptionType"];
					user_id?: string | null;
					user_type?: Database["public"]["Enums"]["UserType"] | null;
				};
				Update: {
					createdAt?: string;
					currency?: Database["public"]["Enums"]["Currency"];
					endTime?: string;
					id?: number;
					startTime?: string;
					store_id?: string | null;
					total?: number;
					type?: Database["public"]["Enums"]["SuscriptionType"];
					user_id?: string | null;
					user_type?: Database["public"]["Enums"]["UserType"] | null;
				};
				Relationships: [
					{
						foreignKeyName: "Suscription_store_id_fkey";
						columns: ["store_id"];
						isOneToOne: false;
						referencedRelation: "Store";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "Suscription_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "User";
						referencedColumns: ["id"];
					},
				];
			};
			Transaction: {
				Row: {
					createdAt: string;
					description: string;
					id: number;
					status: Database["public"]["Enums"]["TransactionStatus"];
					store_id: string | null;
					total: number;
					type: Database["public"]["Enums"]["TransactionType"];
					user_id: string | null;
					user_product_id: number;
				};
				Insert: {
					createdAt?: string;
					description: string;
					id?: number;
					status: Database["public"]["Enums"]["TransactionStatus"];
					store_id?: string | null;
					total: number;
					type: Database["public"]["Enums"]["TransactionType"];
					user_id?: string | null;
					user_product_id: number;
				};
				Update: {
					createdAt?: string;
					description?: string;
					id?: number;
					status?: Database["public"]["Enums"]["TransactionStatus"];
					store_id?: string | null;
					total?: number;
					type?: Database["public"]["Enums"]["TransactionType"];
					user_id?: string | null;
					user_product_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: "Transaction_store_id_fkey";
						columns: ["store_id"];
						isOneToOne: false;
						referencedRelation: "Store";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "Transaction_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "User";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "Transaction_user_product_id_fkey";
						columns: ["user_product_id"];
						isOneToOne: false;
						referencedRelation: "UserProduct";
						referencedColumns: ["id"];
					},
				];
			};
			User: {
				Row: {
					credit: number;
					email: string;
					firstName: string;
					id: string;
					lastName: string;
					phone: string;
					rol: Database["public"]["Enums"]["UserRole"];
					type: Database["public"]["Enums"]["UserType"];
				};
				Insert: {
					credit?: number;
					email: string;
					firstName: string;
					id: string;
					lastName: string;
					phone: string;
					rol?: Database["public"]["Enums"]["UserRole"];
					type?: Database["public"]["Enums"]["UserType"];
				};
				Update: {
					credit?: number;
					email?: string;
					firstName?: string;
					id?: string;
					lastName?: string;
					phone?: string;
					rol?: Database["public"]["Enums"]["UserRole"];
					type?: Database["public"]["Enums"]["UserType"];
				};
				Relationships: [];
			};
			UserBet: {
				Row: {
					bet_id: number;
					createdAt: string;
					user_id: string;
				};
				Insert: {
					bet_id: number;
					createdAt?: string;
					user_id: string;
				};
				Update: {
					bet_id?: number;
					createdAt?: string;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "UserBet_bet_id_fkey";
						columns: ["bet_id"];
						isOneToOne: false;
						referencedRelation: "Bet";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "UserBet_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "User";
						referencedColumns: ["id"];
					},
				];
			};
			UserNotifications: {
				Row: {
					createdAt: string;
					id: number;
					message: string;
					seen: boolean;
					type: Database["public"]["Enums"]["NotificationType"];
					user_id: string;
				};
				Insert: {
					createdAt?: string;
					id?: number;
					message: string;
					seen?: boolean;
					type: Database["public"]["Enums"]["NotificationType"];
					user_id: string;
				};
				Update: {
					createdAt?: string;
					id?: number;
					message?: string;
					seen?: boolean;
					type?: Database["public"]["Enums"]["NotificationType"];
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "UserNotifications_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "User";
						referencedColumns: ["id"];
					},
				];
			};
			UserProduct: {
				Row: {
					cant: number;
					createdAt: string;
					id: number;
					product_id: number;
					store_id: string;
					total: number;
					user_id: string;
				};
				Insert: {
					cant?: number;
					createdAt?: string;
					id?: number;
					product_id: number;
					store_id: string;
					total: number;
					user_id: string;
				};
				Update: {
					cant?: number;
					createdAt?: string;
					id?: number;
					product_id?: number;
					store_id?: string;
					total?: number;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "UserProduct_product_id_fkey";
						columns: ["product_id"];
						isOneToOne: false;
						referencedRelation: "StoreProduct";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "UserProduct_store_id_fkey";
						columns: ["store_id"];
						isOneToOne: false;
						referencedRelation: "Store";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "UserProduct_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "User";
						referencedColumns: ["id"];
					},
				];
			};
			UserStore: {
				Row: {
					createdAt: string;
					rol: Database["public"]["Enums"]["UserStoreRol"];
					store_id: string;
					user_id: string;
				};
				Insert: {
					createdAt?: string;
					rol?: Database["public"]["Enums"]["UserStoreRol"];
					store_id: string;
					user_id: string;
				};
				Update: {
					createdAt?: string;
					rol?: Database["public"]["Enums"]["UserStoreRol"];
					store_id?: string;
					user_id?: string;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			BetStatus: "PENDING" | "READY" | "ENDED";
			Currency: "CREDIT" | "CUP" | "USD" | "MLC";
			GameType: "FOOTBALL" | "BASKETBALL" | "RUGBY" | "BEISBALL";
			NotificationType:
				| "BET_WON"
				| "BET_LOST"
				| "USER_SUSCRIPTION"
				| "STORE_SUSCRIPTION";
			ProductType: "PRODUCT" | "DISCOUNT" | "SORTEO";
			SettingsType: "WON_BET_CREDIT" | "CREDIT_CUP" | "CREDIT_USD";
			SuscriptionType: "USER" | "STORE";
			TransactionStatus: "PENDING" | "COMPLETED" | "CANCELED";
			TransactionType:
				| "USER_PRODUCT"
				| "STORE_PRODUCT"
				| "USER_SUSCRIPTION"
				| "STORE_SUSCRIPTION";
			UserRole: "USER" | "ADMIN";
			UserStoreRol: "USER" | "ADMIN";
			UserType: "NORMAL" | "VIP" | "VIP_PLUS";
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type DefaultSchema = Database[Extract<keyof Database, "public">];

export type Tables<
	DefaultSchemaTableNameOrOptions extends
		| keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
		| { schema: keyof Database },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
				Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
		: never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
	? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
			Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
				DefaultSchema["Views"])
		? (DefaultSchema["Tables"] &
				DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	DefaultSchemaTableNameOrOptions extends
		| keyof DefaultSchema["Tables"]
		| { schema: keyof Database },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
	? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
		? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	DefaultSchemaTableNameOrOptions extends
		| keyof DefaultSchema["Tables"]
		| { schema: keyof Database },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
	? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
		? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	DefaultSchemaEnumNameOrOptions extends
		| keyof DefaultSchema["Enums"]
		| { schema: keyof Database },
	EnumName extends DefaultSchemaEnumNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
		: never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
	? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
		? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
		: never;

export type CompositeTypes<
	PublicCompositeTypeNameOrOptions extends
		| keyof DefaultSchema["CompositeTypes"]
		| { schema: keyof Database },
	CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
		: never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
	? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
	: PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
		? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
		: never;

export const Constants = {
	graphql_public: {
		Enums: {},
	},
	public: {
		Enums: {
			BetStatus: ["PENDING", "READY", "ENDED"],
			Currency: ["CREDIT", "CUP", "USD", "MLC"],
			GameType: ["FOOTBALL", "BASKETBALL", "RUGBY", "BEISBALL"],
			NotificationType: [
				"BET_WON",
				"BET_LOST",
				"USER_SUSCRIPTION",
				"STORE_SUSCRIPTION",
			],
			ProductType: ["PRODUCT", "DISCOUNT", "SORTEO"],
			SettingsType: ["WON_BET_CREDIT", "CREDIT_CUP", "CREDIT_USD"],
			SuscriptionType: ["USER", "STORE"],
			TransactionStatus: ["PENDING", "COMPLETED", "CANCELED"],
			TransactionType: [
				"USER_PRODUCT",
				"STORE_PRODUCT",
				"USER_SUSCRIPTION",
				"STORE_SUSCRIPTION",
			],
			UserRole: ["USER", "ADMIN"],
			UserStoreRol: ["USER", "ADMIN"],
			UserType: ["NORMAL", "VIP", "VIP_PLUS"],
		},
	},
} as const;
