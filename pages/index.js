import { Page, Layout, EmptyState } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

class Index extends React.Component {
    state = { open: false }
    render() {
        return (
        <Page
            title='Batch Orders'
        >
            <Layout>
                <EmptyState
                    heading="Start by Adding Batches"
                    action={{
                        content: 'Add Batches',
                        onAction: () => this.setState({open: true})
                    }}
                    secondaryAction={{content: 'Learn more', url: 'https://help.shopify.com'}}
                    image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                >
                    <p>Select a production date and an order-by date</p>
                <ResourcePicker
                    resourceType='Product'
                    open={this.state.open}
                    onCancel={() => this.setState({open: false})}
                    onSelection={(resources) => this.handleSelection(resources)}
                >

                </ResourcePicker>
                </EmptyState>
            </Layout>
        </Page>
        )
    }

    handleSelection = (resources) => {
        this.setState({open: false})
        const idFromResources = resources.selection.map((product) => product.id);
        console.log(idFromResources)
    }
}

export default Index;
