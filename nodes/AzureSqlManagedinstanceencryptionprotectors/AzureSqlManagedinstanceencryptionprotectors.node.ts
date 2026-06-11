import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlManagedinstanceencryptionprotectors implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure SQL Managedinstanceencryptionprotectors',
		name: 'N8nDevAzureSqlManagedinstanceencryptionprotectors',
		icon: { light: 'file:./azure-sql-managedinstanceencryptionprotectors.png', dark: 'file:./azure-sql-managedinstanceencryptionprotectors.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Azure SQL Database REST API manages databases via CRUD operations.',
		defaults: { name: 'Azure SQL Managedinstanceencryptionprotectors' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSqlManagedinstanceencryptionprotectorsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
