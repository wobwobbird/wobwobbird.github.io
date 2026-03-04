import { columns } from './columns';
import { DataTable } from './data-table';
import { certs } from './cert_data';

export default function DemoPage() {
   
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={certs} />
        </div>
    )
}
  