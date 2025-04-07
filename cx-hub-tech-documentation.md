# cXentral Hub Technical Documentation

## Platform Architecture

### 1. System Overview

The cXentral Hub platform consists of four primary composable layers that work together to deliver seamless customer and employee experiences:

```
┌───────────────────────────────────────────────────────────────┐
│                      ORCHESTRATION ENGINE                      │
└───────────────────────────────────────────────────────────────┘
          ▲                ▲               ▲              ▲
          │                │               │              │
┌─────────┴──────┐ ┌──────┴───────┐ ┌─────┴─────┐ ┌──────┴───────┐
│ APPLICATIONS   │ │ MARKETPLACE  │ │ ECOSYSTEM │ │ DEVELOPMENT  │
│ FOR ENGAGEMENT │ │              │ │           │ │ PLATFORM     │
└────────────────┘ └──────────────┘ └───────────┘ └──────────────┘
```

#### Orchestration Engine

The heart of cXentral Hub is its orchestration engine, which coordinates data, events, and interactions across all components of the platform. The orchestration engine:

- Processes events from all channels and systems
- Routes interactions based on business rules and AI-driven decisions
- Synchronizes data across integrated systems
- Applies composability rules to ensure system coherence
- Provides a unified data model across the platform

#### Key Design Principles

1. **API-First Architecture**: Every function and capability is accessible via APIs
2. **Event-Driven Design**: Components communicate through well-defined events
3. **Microservices Structure**: Independent services with focused responsibilities
4. **Composable Components**: Loosely coupled with clear contracts between services
5. **Multi-Tenant Design**: Secure isolation with shared infrastructure efficiencies

### 2. Data Architecture

The cXentral Hub data architecture is designed around a unified data model that brings together customer, interaction, and operational data.

#### Data Flow Architecture

```
┌───────────────────┐     ┌───────────────────┐     ┌───────────────────┐
│  External Systems │     │  cXentral Hub     │     │  External Systems │
│  (Data Sources)   │────▶│  Data Platform    │────▶│  (Consumers)      │
└───────────────────┘     └───────────────────┘     └───────────────────┘
                                    │
                                    ▼
                          ┌───────────────────┐
                          │  Data Services    │
                          │ - Enrichment      │
                          │ - Normalization   │
                          │ - Transformation  │
                          └───────────────────┘
                                    │
                          ┌─────────┴─────────┐
                          ▼                   ▼
                 ┌───────────────┐   ┌───────────────┐
                 │ Operational   │   │ Analytical    │
                 │ Data Store    │   │ Data Store    │
                 └───────────────┘   └───────────────┘
                          │                   │
                          ▼                   ▼
                 ┌───────────────┐   ┌───────────────┐
                 │ Real-time     │   │ BI/Analytics  │
                 │ Applications  │   │ Dashboards    │
                 └───────────────┘   └───────────────┘
```

#### Data Models

The platform uses a canonical data model for each entity type with versioned schemas:

- **Customer Profile**: Unified customer information
- **Interaction History**: Complete interaction records across channels
- **Journey Maps**: Customer journey tracking and analysis
- **Content Objects**: Reusable content for customer communications
- **Workflow Definitions**: Process and automation definitions

### 3. Integration Architecture

cXentral Hub provides multiple integration patterns to connect with external systems:

#### Integration Methods

| Method | Description | Best For |
|--------|-------------|----------|
| REST APIs | Synchronous request/response | Direct integration with modern systems |
| GraphQL | Flexible query language | Complex data queries with multiple entities |
| Webhooks | Event-driven notifications | Real-time updates and triggers |
| Event Streams | Publish/subscribe messaging | High-volume, asynchronous processing |
| File Exchange | Batch processing | Large data transfers and legacy systems |
| SDK Libraries | Client libraries | Developer-friendly application integration |

#### Integration Security

- OAuth 2.0 authorization framework
- API key authentication for simple integrations
- JWT token-based authentication
- IP whitelisting for additional security
- Rate limiting and quota management

## API Reference

### 1. Core APIs

#### Authentication API

```http
POST /api/v1/auth/token
Content-Type: application/json

{
  "client_id": "your-client-id",
  "client_secret": "your-client-secret",
  "grant_type": "client_credentials"
}
```

**Response:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

#### Customer API

**Get Customer Profile:**

```http
GET /api/v1/customers/{customer_id}
Authorization: Bearer {access_token}
```

**Create Customer:**

```http
POST /api/v1/customers
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "attributes": {
    "custom_field": "value"
  }
}
```

#### Interaction API

**Create Interaction:**

```http
POST /api/v1/interactions
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "customer_id": "cust_123456",
  "channel": "web_chat",
  "type": "customer_initiated",
  "content": {
    "message": "Hello, I need help with my order."
  },
  "context": {
    "referring_page": "checkout"
  }
}
```

**Get Interaction History:**

```http
GET /api/v1/customers/{customer_id}/interactions
Authorization: Bearer {access_token}
```

### 2. Orchestration APIs

#### Workflow API

**Create Workflow:**

```http
POST /api/v1/workflows
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "name": "Customer Support Routing",
  "description": "Routes support requests based on priority and agent skills",
  "triggers": [
    {
      "type": "interaction_created",
      "conditions": {
        "channel": "web_chat",
        "type": "customer_initiated"
      }
    }
  ],
  "actions": [
    {
      "type": "sentiment_analysis",
      "config": {
        "field": "content.message"
      }
    },
    {
      "type": "priority_assignment",
      "config": {
        "rules": [
          {
            "if": "$.sentiment < -0.5",
            "then": { "priority": "high" }
          }
        ]
      }
    },
    {
      "type": "route_to_queue",
      "config": {
        "queue_id": "q_support_priority"
      }
    }
  ]
}
```

**Execute Workflow:**

```http
POST /api/v1/workflows/{workflow_id}/execute
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "context": {
    "customer_id": "cust_123456",
    "interaction_id": "int_789012"
  },
  "input": {
    "message": "I'm very upset about my delayed order!"
  }
}
```

#### Queue API

**Get Queue Status:**

```http
GET /api/v1/queues/{queue_id}/status
Authorization: Bearer {access_token}
```

**Response:**

```json
{
  "queue_id": "q_support_priority",
  "name": "Priority Support",
  "active_interactions": 12,
  "available_agents": 5,
  "longest_wait_time": 180,
  "average_wait_time": 75
}
```

### 3. Application APIs

#### Digital Engagement API

**Start Web Chat:**

```http
POST /api/v1/channels/web-chat/sessions
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "customer_id": "cust_123456",
  "initial_message": "Hello, I need help",
  "context": {
    "page_url": "https://example.com/checkout",
    "referring_url": "https://example.com/cart"
  }
}
```

**Response:**

```json
{
  "session_id": "chat_abcdef123",
  "token": "chat_session_token",
  "expires_in": 3600
}
```

#### Voice Services API

**Create Outbound Call:**

```http
POST /api/v1/channels/voice/calls
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "customer_id": "cust_123456",
  "phone_number": "+1234567890",
  "caller_id": "+1987654321",
  "workflow_id": "wf_outbound_sales",
  "attributes": {
    "campaign_id": "summer_promo"
  }
}
```

#### AI Services API

**Generate Response:**

```http
POST /api/v1/ai/generate-response
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "customer_id": "cust_123456",
  "interaction_id": "int_789012",
  "customer_message": "What is your return policy?",
  "context": {
    "recent_purchase": {
      "order_id": "ord_456789",
      "date": "2023-06-15"
    }
  }
}
```

**Response:**

```json
{
  "response": "Our return policy allows returns within 30 days of purchase. Your recent order #456789 from June 15th would be eligible for return until July 15th.",
  "confidence": 0.92,
  "knowledge_sources": [
    {
      "id": "kb_return_policy",
      "relevance": 0.95
    }
  ],
  "suggested_actions": [
    {
      "id": "initiate_return",
      "name": "Initiate Return",
      "description": "Help the customer start the return process"
    }
  ]
}
```

## Integration Guides

### 1. Salesforce Integration

#### Overview

The cXentral Hub - Salesforce integration provides bi-directional synchronization of customer data, interactions, and workflow triggers.

#### Integration Architecture

```
┌───────────────┐                           ┌───────────────┐
│               │                           │               │
│  cXentral Hub │◄────── Customer Data ────►│   Salesforce  │
│               │                           │               │
└───────┬───────┘                           └───────┬───────┘
        │                                           │
        │                                           │
        │         ┌───────────────────┐            │
        │         │                   │            │
        └────────►│  Integration      │◄───────────┘
                  │  Middleware       │
                  │                   │
                  └───────────────────┘
```

#### Setup Instructions

1. **Create Connected App in Salesforce**
   - Navigate to Setup > App Manager > New Connected App
   - Configure OAuth settings with callback URL: `https://api.cxentral.com/integrations/salesforce/oauth/callback`
   - Enable necessary OAuth scopes: `api`, `refresh_token`, `web`

2. **Configure Salesforce Integration in cXentral Hub**
   - Go to Settings > Integrations > Salesforce
   - Enter Connected App Client ID and Client Secret
   - Click "Authorize" to initiate OAuth flow
   - Configure field mappings for contact, account, and interaction objects

3. **Set Up Data Synchronization Rules**
   - Define which objects to sync bi-directionally
   - Configure conflict resolution rules
   - Set up real-time or scheduled sync intervals

#### Data Mapping

| cXentral Hub Object | Salesforce Object | Sync Direction |
|---------------------|-------------------|----------------|
| Customer | Contact | Bi-directional |
| Organization | Account | Bi-directional |
| Interaction | Case | Bi-directional |
| Task | Task | Bi-directional |
| Journey | Custom Object | cXentral Hub → Salesforce |

#### Authentication Flow

1. OAuth 2.0 authorization code flow
2. JWT bearer token authentication for server-to-server
3. Refresh token management for long-term access

#### Webhook Events

| Event Type | Description | Payload Example |
|------------|-------------|-----------------|
| `contact.created` | New contact created in Salesforce | `{"id": "0035f00000BvLpXAAV", "email": "customer@example.com"}` |
| `case.updated` | Case updated in Salesforce | `{"id": "5005f00000BvLpXAAV", "status": "Closed"}` |
| `task.completed` | Task marked complete in Salesforce | `{"id": "00T5f00000BvLpXAAV", "subject": "Follow up call"}` |

### 2. Microsoft Teams Integration

#### Overview

The cXentral Hub - Microsoft Teams integration allows agents to collaborate with subject matter experts, manage workflows, and handle customer interactions directly within Teams.

#### Integration Capabilities

- Agent desktop embedded within Teams
- Expert finder to locate and engage SMEs
- Ticket/case sharing and collaboration
- Conversation transcripts and summaries
- Alert notifications for critical events
- Workflow approvals and task management

#### Setup Instructions

1. **Register App in Azure AD**
   - Navigate to Azure Portal > Azure Active Directory > App Registrations
   - Create a new registration for cXentral Hub
   - Configure redirect URIs for authentication
   - Generate client secret

2. **Configure Teams App Manifest**
   - Create app manifest JSON file
   - Define required permissions and scopes
   - Configure tabs and bot capabilities
   - Package app for distribution

3. **Deploy Teams App**
   - Upload app package to Teams App Catalog
   - Grant admin consent for required permissions
   - Configure app settings in cXentral Hub

#### Authentication Configuration

```json
{
  "authorization_endpoint": "https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/authorize",
  "token_endpoint": "https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/token",
  "client_id": "your-client-id",
  "client_secret": "your-client-secret",
  "scope": "User.Read Chat.ReadWrite TeamMember.Read",
  "response_type": "code",
  "grant_type": "authorization_code"
}
```

#### Bot Framework Integration

```python
# Example of handling Teams bot events
@app.route("/api/messages", methods=["POST"])
def messages():
    # Parse the incoming activity
    activity = Activity.deserialize(request.json)
    
    if activity.type == ActivityTypes.message:
        # Handle user message
        text = activity.text.lower()
        
        if "customer lookup" in text:
            # Extract customer identifier
            customer_id = extract_customer_id(text)
            
            # Fetch customer data from cXentral Hub
            customer = cxentral_client.get_customer(customer_id)
            
            # Format and send response
            response = create_adaptive_card_with_customer_data(customer)
            return jsonify(response)
    
    elif activity.type == ActivityTypes.conversation_update:
        # Handle conversation events
        return jsonify({})
        
    return jsonify({})
```

## Developer Tutorials

### 1. Building Your First Workflow

This tutorial walks through creating a customer engagement workflow that routes incoming inquiries based on sentiment analysis and customer history.

#### Step 1: Define Workflow Objectives

Before diving into implementation, define what the workflow should accomplish:

- Analyze incoming customer messages for sentiment and intent
- Route high-priority customers to specialized agents
- Provide contextual information to agents
- Track key metrics for workflow performance

#### Step 2: Create Workflow in cXentral Hub

```javascript
// Login to cXentral Hub Developer Portal
const cxentralClient = new CXentralClient({
  apiKey: 'your_api_key',
  environment: 'development'
});

// Create a new workflow
const workflow = await cxentralClient.workflows.create({
  name: 'Customer Support Router',
  description: 'Routes customer inquiries based on sentiment and history',
  active: true,
  triggers: [
    {
      type: 'new_message',
      channels: ['web_chat', 'email', 'sms'],
      conditions: {
        // Only trigger for initial messages in a conversation
        'conversation.message_count': 1
      }
    }
  ]
});
```

#### Step 3: Add Workflow Steps

```javascript
// Add sentiment analysis step
await cxentralClient.workflows.addStep(workflow.id, {
  name: 'analyze_sentiment',
  type: 'ai_sentiment_analysis',
  config: {
    input_field: 'message.text',
    output_field: 'workflow.sentiment'
  }
});

// Add customer lookup step
await cxentralClient.workflows.addStep(workflow.id, {
  name: 'customer_lookup',
  type: 'data_lookup',
  config: {
    entity: 'customer',
    lookup_by: 'customer.id',
    output_field: 'workflow.customer_data'
  }
});

// Add routing decision step
await cxentralClient.workflows.addStep(workflow.id, {
  name: 'routing_decision',
  type: 'conditional_router',
  config: {
    conditions: [
      {
        when: {
          'workflow.sentiment.score': { lt: -0.5 },
          'workflow.customer_data.segment': 'premium'
        },
        then: {
          route_to: 'queue.premium_urgent'
        }
      },
      {
        when: {
          'workflow.sentiment.score': { lt: -0.5 }
        },
        then: {
          route_to: 'queue.urgent'
        }
      },
      {
        when: {
          'workflow.customer_data.segment': 'premium'
        },
        then: {
          route_to: 'queue.premium'
        }
      }
    ],
    default: {
      route_to: 'queue.standard'
    }
  }
});
```

#### Step 4: Test the Workflow

```javascript
// Simulate a workflow execution
const testResult = await cxentralClient.workflows.test(workflow.id, {
  input: {
    message: {
      text: "I'm extremely frustrated with your service!",
      channel: 'web_chat'
    },
    customer: {
      id: 'cust_123456',
      email: 'test@example.com'
    }
  }
});

console.log('Test result:', testResult);
// Output will show the execution path and final routing decision
```

#### Step 5: Deploy and Monitor

```javascript
// Publish the workflow to production
await cxentralClient.workflows.deploy(workflow.id, {
  environment: 'production'
});

// Set up monitoring
const monitoringConfig = await cxentralClient.workflows.setupMonitoring(workflow.id, {
  metrics: ['execution_count', 'average_execution_time', 'error_rate'],
  alerts: [
    {
      metric: 'error_rate',
      threshold: 0.05, // 5% error rate
      notify_channels: ['email', 'slack']
    }
  ]
});
```

### 2. Building a Custom Integration

This tutorial demonstrates how to build a custom integration between cXentral Hub and a third-party system.

#### Step 1: Define Integration Requirements

- Identify the data to synchronize (customer records, orders, interactions)
- Determine sync frequency (real-time, scheduled)
- Define error handling and conflict resolution

#### Step 2: Register Integration App

```javascript
const integrationApp = await cxentralClient.integrations.create({
  name: 'Custom CRM Integration',
  description: 'Bidirectional sync with internal CRM system',
  webhook_url: 'https://your-service.example.com/webhooks/cxentral',
  event_subscriptions: [
    'customer.created',
    'customer.updated',
    'interaction.created'
  ],
  oauth_config: {
    redirect_uri: 'https://your-service.example.com/oauth/callback'
  }
});

console.log('Client ID:', integrationApp.client_id);
console.log('Client Secret:', integrationApp.client_secret);
```

#### Step 3: Implement Authentication

```javascript
// OAuth flow implementation (on your server)
app.get('/oauth/start', (req, res) => {
  const authUrl = cxentralClient.getAuthorizationUrl({
    client_id: INTEGRATION_CLIENT_ID,
    redirect_uri: 'https://your-service.example.com/oauth/callback',
    scope: 'customers:read customers:write interactions:read'
  });
  
  res.redirect(authUrl);
});

app.get('/oauth/callback', async (req, res) => {
  const { code } = req.query;
  
  try {
    const tokenResponse = await cxentralClient.exchangeCodeForToken({
      client_id: INTEGRATION_CLIENT_ID,
      client_secret: INTEGRATION_CLIENT_SECRET,
      code,
      redirect_uri: 'https://your-service.example.com/oauth/callback'
    });
    
    // Store tokens securely
    await storeTokensInDatabase({
      access_token: tokenResponse.access_token,
      refresh_token: tokenResponse.refresh_token,
      expires_at: Date.now() + (tokenResponse.expires_in * 1000)
    });
    
    res.redirect('/integration/success');
  } catch (error) {
    console.error('OAuth error:', error);
    res.redirect('/integration/error');
  }
});
```

#### Step 4: Implement Webhook Handler

```javascript
// Webhook handler for cXentral Hub events
app.post('/webhooks/cxentral', async (req, res) => {
  // Verify webhook signature
  const signature = req.headers['x-cxentral-signature'];
  if (!verifySignature(req.body, signature, WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }
  
  const event = req.body;
  
  try {
    switch (event.type) {
      case 'customer.created':
      case 'customer.updated':
        await syncCustomerToCRM(event.data);
        break;
        
      case 'interaction.created':
        await createInteractionInCRM(event.data);
        break;
        
      default:
        console.log('Unhandled event type:', event.type);
    }
    
    res.status(200).send('Event processed');
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).send('Error processing event');
  }
});

async function syncCustomerToCRM(customerData) {
  // Implementation to sync customer data to your CRM
  const crmCustomer = transformToCRMFormat(customerData);
  
  // Check if customer exists in CRM
  const existingCustomer = await crmClient.findCustomerByExternalId(
    customerData.id
  );
  
  if (existingCustomer) {
    // Update existing customer
    return crmClient.updateCustomer(existingCustomer.id, crmCustomer);
  } else {
    // Create new customer
    return crmClient.createCustomer({
      ...crmCustomer,
      external_id: customerData.id
    });
  }
}
```

#### Step 5: Implement Sync from Your System to cXentral Hub

```javascript
// Function to sync CRM data to cXentral Hub
async function syncCRMCustomerToCXentralHub(crmCustomer) {
  // Get fresh access token if needed
  const tokens = await getValidTokens();
  
  // Transform CRM data to cXentral Hub format
  const cxentralCustomer = transformToCXentralFormat(crmCustomer);
  
  try {
    // Find if customer already exists
    const existingCustomer = await cxentralClient.customers.findByExternalId(
      crmCustomer.id,
      { headers: { Authorization: `Bearer ${tokens.access_token}` }}
    );
    
    if (existingCustomer) {
      // Update existing customer
      return cxentralClient.customers.update(
        existingCustomer.id,
        cxentralCustomer,
        { headers: { Authorization: `Bearer ${tokens.access_token}` }}
      );
    } else {
      // Create new customer
      return cxentralClient.customers.create(
        {
          ...cxentralCustomer,
          external_id: crmCustomer.id,
          external_system: 'internal_crm'
        },
        { headers: { Authorization: `Bearer ${tokens.access_token}` }}
      );
    }
  } catch (error) {
    console.error('Error syncing to cXentral Hub:', error);
    throw error;
  }
}
```

## SDK References

### JavaScript SDK

The JavaScript SDK provides client-side and server-side libraries for interacting with the cXentral Hub APIs.

#### Installation

```bash
# NPM
npm install @cxentral/sdk

# Yarn
yarn add @cxentral/sdk
```

#### Basic Usage

```javascript
import { CXentralClient } from '@cxentral/sdk';

// Initialize client
const client = new CXentralClient({
  apiKey: 'your_api_key',          // For server-side usage
  environment: 'production',        // 'production' or 'sandbox'
  region: 'eu-west-1'               // Optional: specify region
});

// Alternative initialization with OAuth
const oauth_client = new CXentralClient({
  clientId: 'your_oauth_client_id', // For client-side usage
  redirectUri: 'https://your-app.example.com/callback'
});

// Login using OAuth (client-side only)
oauth_client.login().then(() => {
  console.log('Authenticated successfully');
});
```

#### Customers API

```javascript
// Create a customer
const newCustomer = await client.customers.create({
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@example.com',
  phone: '+1234567890'
});

// Get customer by ID
const customer = await client.customers.get('cust_12345');

// Update customer
const updatedCustomer = await client.customers.update('cust_12345', {
  email: 'new.email@example.com'
});

// Search customers
const customerResults = await client.customers.search({
  query: 'john',
  fields: ['first_name', 'last_name', 'email'],
  limit: 10
});
```

#### Interactions API

```javascript
// Get customer interactions
const interactions = await client.interactions.list({
  customer_id: 'cust_12345',
  channel: 'web_chat',
  limit: 25,
  order: 'desc'
});

// Create interaction
const interaction = await client.interactions.create({
  customer_id: 'cust_12345',
  channel: 'web_chat',
  type: 'outbound',
  content: {
    message: 'Hello! How can I help you today?'
  }
});

// Get interaction by ID
const interactionDetails = await client.interactions.get('int_67890');
```

#### Workflows API

```javascript
// List workflows
const workflows = await client.workflows.list();

// Get workflow details
const workflow = await client.workflows.get('wf_12345');

// Execute workflow
const executionResult = await client.workflows.execute('wf_12345', {
  customer_id: 'cust_67890',
  context: {
    channel: 'web_chat',
    source: 'landing_page'
  }
});
```

#### Error Handling

```javascript
try {
  const customer = await client.customers.get('invalid_id');
} catch (error) {
  if (error.status === 404) {
    console.log('Customer not found');
  } else if (error.status === 401) {
    console.log('Authentication failed:', error.message);
  } else {
    console.error('API error:', error.message);
  }
}
```

### Python SDK

The Python SDK provides a comprehensive client for interacting with cXentral Hub APIs from Python applications.

#### Installation

```bash
pip install cxentral-sdk
```

#### Basic Usage

```python
from cxentral import CXentralClient

# Initialize client with API key (server-side)
client = CXentralClient(
    api_key="your_api_key",
    environment="production"  # or "sandbox"
)

# Alternative: Initialize with OAuth credentials
oauth_client = CXentralClient(
    client_id="your_client_id",
    client_secret="your_client_secret"
)

# Authenticate using OAuth client credentials flow
token = oauth_client.authenticate()
```

#### Customers API

```python
# Create customer
new_customer = client.customers.create({
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "phone": "+9876543210"
})

# Get customer by ID
customer = client.customers.get("cust_12345")

# Update customer
updated_customer = client.customers.update("cust_12345", {
    "attributes": {
        "preferences": {
            "communication_channel": "email"
        }
    }
})

# List customers with pagination
customers_page1 = client.customers.list(limit=25)
next_page_token = customers_page1.get("next_page_token")

if next_page_token:
    customers_page2 = client.customers.list(
        limit=25, 
        page_token=next_page_token
    )
```

#### AI Services

```python
# Analyze sentiment
sentiment_result = client.ai.analyze_sentiment(
    text="I'm really happy with your service!",
    language="en"
)

# Generate response
response = client.ai.generate_response(
    customer_id="cust_12345",
    message="What are your business hours?",
    context={
        "location": "New York"
    }
)

# Analyze intent
intent_result = client.ai.analyze_intent(
    text="I want to cancel my subscription",
    possible_intents=["cancel", "upgrade", "downgrade", "help"]
)
```

#### Error Handling

```python
from cxentral.exceptions import (
    CXentralAPIError,
    ResourceNotFoundError,
    AuthenticationError
)

try:
    customer = client.customers.get("non_existent_id")
except ResourceNotFoundError:
    print("Customer not found")
except AuthenticationError as e:
    print(f"Authentication failed: {e}")
except CXentralAPIError as e:
    print(f"API error ({e.status_code}): {e.message}")
```

## Mobile SDK References

### iOS SDK

The iOS SDK enables native iOS applications to integrate with cXentral Hub services.

#### Installation

**Swift Package Manager:**

```swift
dependencies: [
    .package(url: "https://github.com/cxentral/ios-sdk.git", from: "1.0.0")
]
```

**CocoaPods:**

```ruby
pod 'CXentralSDK', '~> 1.0.0'
```

#### Basic Usage

```swift
import CXentralSDK

// Initialize SDK
let config = CXentralConfig(
    apiKey: "your_api_key",
    environment: .production
)

CXentralSDK.initialize(with: config)

// Alternative: OAuth initialization
let oauthConfig = CXentralConfig(
    clientId: "your_client_id",
    redirectUri: "your-app://callback"
)

CXentralSDK.initialize(with: oauthConfig)
```

#### Authentication

```swift
// Login with OAuth
CXentralSDK.auth.login { result in
    switch result {
    case .success(let user):
        print("Logged in as: \(user.email)")
    case .failure(let error):
        print("Login failed: \(error.localizedDescription)")
    }
}

// Check authentication state
if CXentralSDK.auth.isAuthenticated {
    // User is authenticated
} else {
    // User is not authenticated
}

// Logout
CXentralSDK.auth.logout { success in
    if success {
        print("Logged out successfully")
    }
}
```

#### Customer Service

```swift
// Get customer profile
CXentralSDK.customers.getProfile(id: "cust_12345") { result in
    switch result {
    case .success(let customer):
        print("Customer: \(customer.firstName) \(customer.lastName)")
    case .failure(let error):
        print("Error: \(error.localizedDescription)")
    }
}

// Update customer profile
let updateData = CustomerUpdateRequest(
    firstName: "Jane",
    lastName: "Smith",
    attributes: ["preference": "mobile"]
)

CXentralSDK.customers.updateProfile(id: "cust_12345", data: updateData) { result in
    switch result {
    case .success(let customer):
        print("Updated customer: \(customer.firstName) \(customer.lastName)")
    case .failure(let error):
        print("Update failed: \(error.localizedDescription)")
    }
}
```

#### Chat Service

```swift
// Initialize chat
let chatConfig = ChatConfig(
    customerId: "cust_12345"
)

CXentralSDK.chat.initialize(config: chatConfig) { result in
    switch result {
    case .success(let session):
        print("Chat initialized with session ID: \(session.id)")
    case .failure(let error):
        print("Chat initialization failed: \(error.localizedDescription)")
    }
}

// Send message
CXentralSDK.chat.sendMessage(text: "Hello, I need help with my order") { result in
    switch result {
    case .success(let message):
        print("Message sent with ID: \(message.id)")
    case .failure(let error):
        print("Failed to send message: \(error.localizedDescription)")
    }
}

// Subscribe to incoming messages
CXentralSDK.chat.onMessageReceived { message in
    print("New message: \(message.text)")
    // Update UI with new message
}
```

#### Error Handling

```swift
enum CXentralError: Error {
    case networkError(Error)
    case apiError(statusCode: Int, message: String)
    case authenticationError
    case invalidInput
    case unknown
}

// Example handling
func handleError(_ error: CXentralError) {
    switch error {
    case .networkError(let underlyingError):
        print("Network error: \(underlyingError.localizedDescription)")
    case .apiError(let statusCode, let message):
        print("API error (\(statusCode)): \(message)")
    case .authenticationError:
        print("Authentication error - please log in again")
        // Present login screen
    case .invalidInput:
        print("Invalid input provided")
    case .unknown:
        print("An unknown error occurred")
    }
}
```
