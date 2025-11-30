# SolaFire - Azure Cosmos DB Table API Setup Guide

## 🚀 Azure Cosmos DB Table API Setup

### 1. Create Azure Account
1. Go to [Azure Portal](https://portal.azure.com)
2. Sign up for free account (includes $200 credit)
3. Choose your subscription

### 2. Create Storage Account
1. In Azure Portal, click **"Create a resource"**
2. Search for **"Storage account"**
3. Click **"Create"**
4. Fill in the details:
   - **Resource group**: Create new (e.g., `solafire-rg`)
   - **Storage account name**: `solafirestorage` (must be unique)
   - **Location**: Choose nearest to you
   - **Performance**: **Standard**
   - **Account kind**: **StorageV2 (general purpose v2)**
   - **Replication**: **Locally-redundant storage (LRS)**
5. Click **"Review + create"** → **"Create"**
6. Wait for deployment (2-3 minutes)

### 3. Enable Table Service
1. Go to your created storage account
2. Click **"Tables"** in the left menu
3. Click **"+ Table"** to create a table
4. **Table name**: `solafiredata`
5. Click **"OK"**

### 4. Get Access Keys
1. In your storage account, click **"Access keys"**
2. Copy **Connection string** (shows both key1 and key2)
3. You'll need the **Account name** and **Account key**

### 5. Update Azure Configuration
Edit `lib/azure.ts` and update the configuration:

```typescript
const azureConfig = {
  accountName: "solafirestorage", // Your storage account name
  accountKey: "your-account-key-here", // From Access keys
  tableName: "solafiredata" // Table name you created
}
```

**Extract from connection string:**
```
Connection string: DefaultEndpointsProtocol=https;AccountName=solafirestorage;AccountKey=YOUR_ACCOUNT_KEY_HERE;EndpointSuffix=core.windows.net
```
- **Account name**: `solafirestorage`
- **Account key**: `YOUR_ACCOUNT_KEY_HERE` (get from Azure portal)

### 6. Install Dependencies
```bash
npm install
```

### 7. Run the App
```bash
npm run dev
```

## 🔥 Azure vs Firebase Benefits

| Feature | Azure Cosmos DB Table | Firebase |
|---------|----------------------|----------|
| **Free Tier** | 5GB tables, 1000 ops/sec | 1GB, 50K reads/day |
| **Pricing** | Pay-per-use (very cheap) | Fixed tiers |
| **Performance** | Enterprise grade | Good |
| **Security** | Azure security center | Google security |
| **Integration** | Full Azure ecosystem | Google only |
| **Scalability** | Global, instant | Global, slower |

## 🎯 Test Multi-User

1. **Open app in normal browser**
2. **Create projects/users/allocations**
3. **Open app in incognito window** 
4. **Login and see the same data!**
5. **Make changes - they sync in real-time**

## 🔧 Azure Table API Structure

Your data is stored as:

| PartitionKey | RowKey | Data |
|-------------|--------|------|
| `globaldata` | `main` | JSON with all projects/users/allocations |

## 🚨 Troubleshooting

### "Access denied" error
- Check your account key is correct
- Ensure storage account name matches exactly
- Verify table name is `solafiredata`

### "Table not found" error
- Create the table manually in Azure Portal
- Or let the app create it (auto-creation)

### "Network error"
- Check internet connection
- Verify Azure region is accessible
- Check firewall settings

### "CORS error"
- Add CORS rules to your storage account:
  1. Go to Storage Account → **"Resource management"** → **"CORS"**
  2. Add allowed origins: `*`
  3. Allowed methods: `GET, POST, PUT, DELETE, OPTIONS`
  4. Click **"Save"**

## 💡 Cost Optimization

**Free tier includes:**
- 5GB table storage
- 1000 operations per second
- More than enough for your project!

**Estimated monthly cost for larger usage:**
- Storage: ~$0.02 per GB
- Operations: ~$0.0004 per 10,000 operations
- **Total for typical usage: <$1/month**

## 🔒 Security Best Practices

1. **Use Managed Identity** for production
2. **Enable HTTPS only** (default)
3. **Use private endpoints** for enterprise
4. **Monitor with Azure Monitor**
5. **Backup with Azure Backup**

## 📞 Need Help?

1. Check browser console (F12) for detailed errors
2. Verify Azure configuration in `lib/azure.ts`
3. Ensure table exists in Azure Portal
4. Check storage account access keys

---

🎉 **Your SolaFire app now runs on Azure with enterprise-grade reliability!**
