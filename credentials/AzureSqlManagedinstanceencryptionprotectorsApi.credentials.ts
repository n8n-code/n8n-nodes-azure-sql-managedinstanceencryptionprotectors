import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlManagedinstanceencryptionprotectorsApi implements ICredentialType {
        name = 'N8nDevAzureSqlManagedinstanceencryptionprotectorsApi';

        displayName = 'Azure SQL Managedinstanceencryptionprotectors API';

        icon: Icon = { light: 'file:../nodes/AzureSqlManagedinstanceencryptionprotectors/azure-sql-managedinstanceencryptionprotectors.png', dark: 'file:../nodes/AzureSqlManagedinstanceencryptionprotectors/azure-sql-managedinstanceencryptionprotectors.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Managedinstanceencryptionprotectors API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
