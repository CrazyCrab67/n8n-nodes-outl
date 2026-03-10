import {
        IAuthenticateGeneric,ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class outlineApi implements ICredentialType {
        name = 'outlineApi';
        displayName = 'outline Access Token API';
        documentationUrl = 'https://github.com/sufficit/n8n-nodes-chatwoot/docs/auth';
        properties: INodeProperties[] = [
                {
                        displayName: 'outline API Url',
                        name: 'baseUrl',
                        placeholder: "https://cp.hornetsecurity.com/api/v0",
                        type: 'string',
                        default: '',
                        required: true,
                },
                {
                        displayName: 'Authorization',
                        name: 'Authorization',
                        type: 'string',
                        placeholder: "bearer",
                        default: '',
                        required: true,
                },

        ];
    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                'Authorization': '={{$credentials.Authorization}}',
            },
        },
    };
}