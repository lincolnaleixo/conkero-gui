import avatar2 from '../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../assets/images/users/avatar-6.jpg';
import avatar7 from '../../assets/images/users/avatar-7.jpg';
import avatar8 from '../../assets/images/users/avatar-8.jpg';

const invoiceWidgets = [
	{
		id: 1,
		label: 'Invoices Sent',
		percentage: '+89.24 %',
		percentageClass: 'success',
		icon: 'ri-arrow-right-up-line',
		counter: '559.25',
		badge: '2,258',
		caption: 'Invoices sent',
		feaIcon: 'file-text',
		decimals: 1,
		prefix: '$',
		suffix: 'k'
	},
	{
		id: 2,
		label: 'Paid Invoices',
		percentage: '+8.09 %',
		percentageClass: 'danger',
		icon: 'ri-arrow-right-down-line',
		counter: '409.66',
		badge: '1,958',
		caption: 'Paid by clients',
		feaIcon: 'check-square',
		decimals: 2,
		prefix: '$',
		suffix: 'k'
	},
	{
		id: 3,
		label: 'Unpaid Invoices',
		percentage: '+9.01 %',
		percentageClass: 'danger',
		icon: 'ri-arrow-right-down-line',
		counter: '136.98',
		badge: '338',
		caption: 'Unpaid by clients',
		feaIcon: 'clock',
		decimals: 2,
		prefix: '$',
		suffix: 'k'
	},
	{
		id: 4,
		label: 'Cancelled Invoices',
		percentage: '+7.55 %',
		percentageClass: 'success',
		icon: 'ri-arrow-right-up-line',
		counter: '84.2',
		badge: '502',
		caption: 'Cancelled by clients',
		feaIcon: 'x-octagon',
		decimals: 1,
		prefix: '$',
		suffix: 'k'
	}
];

const invoiceTable = [
	{
		id: 1,
		invoiceId: '#VL25000351',
		img: avatar2,
		name: 'Diana Kohler',
		email: 'dianakohler@Conkero.com',
		country: 'Brazil',
		date: '06 Apr, 2021',
		time: '09:58PM',
		amount: '$875',
		status: 'Paid',
		statusClass: 'success'
	},
	{
		id: 2,
		invoiceId: '#VL25000352',
		img: avatar3,
		name: 'James Morris',
		email: 'jamesmorris@Conkero.com',
		country: 'Germany',
		date: '17 Dec, 2021',
		time: '1:24AM',
		amount: '$451.00',
		status: 'Unpaid',
		statusClass: 'warning'
	},
	{
		id: 3,
		invoiceId: '#VL25000353',
		img: avatar4,
		name: 'Dawn Koh',
		email: 'dawnkoh@Conkero.com',
		country: 'United Kingdom',
		date: '29 Nov, 2021',
		time: '7:20PM',
		amount: '$984.98',
		status: 'Paid',
		statusClass: 'success'
	},
	{
		id: 4,
		invoiceId: '#VL25000354',
		img: avatar5,
		name: 'Tonya Noble',
		email: 'tonynoble@Conkero.com',
		country: 'Spain',
		date: '22 Nov, 2021',
		time: '10:20PM',
		amount: '$742.12',
		status: 'Cancel',
		statusClass: 'danger'
	},
	{
		id: 5,
		invoiceId: '#VL25000355',
		img: avatar6,
		name: 'David Nichols',
		email: 'davidnochols@Conkero.com',
		country: 'United States of America',
		date: '11 Nov, 2021',
		time: '12:37AM',
		amount: '$2415.00',
		status: 'Unpaid',
		statusClass: 'warning'
	},
	{
		id: 6,
		invoiceId: '#VL25000356',
		img: avatar7,
		name: 'Joseph Payten',
		email: 'josephpayten@Conkero.com',
		country: 'France',
		date: '03 Nov, 2021',
		time: '12:29AM',
		amount: '$7451.02',
		status: 'Paid',
		statusClass: 'success'
	},
	{
		id: 7,
		invoiceId: '#VL25000357',
		name: 'Mary Rucker',
		email: 'maryrucker@Conkero.com',
		country: 'United Kingdom',
		date: '27 Oct, 2021',
		time: '01:46PM',
		amount: '$327.36',
		status: 'Cancel',
		statusClass: 'danger'
	},
	{
		id: 8,
		invoiceId: '#VL25000358',
		name: 'Alexis Clarke',
		email: 'alexisclarke@Conkero.com',
		country: 'Spain',
		date: '18 Oct, 2021',
		time: '04:55PM',
		amount: '$879.78',
		status: 'Unpaid',
		statusClass: 'warning'
	},
	{
		id: 9,
		invoiceId: '#VL25000359',
		img: avatar8,
		name: 'Ryan Cowie',
		email: 'rayancowie@Conkero.com',
		country: 'France',
		date: '07 Oct, 2021',
		time: '06:33AM',
		amount: '$879.00',
		status: 'Refund',
		statusClass: 'primary'
	},
	{
		id: 10,
		invoiceId: '#VL25000360',
		img: avatar4,
		name: 'Christina Maier',
		email: 'christinamaier@Conkero.com',
		country: 'United States of America',
		date: '13 Sep, 2021',
		time: '11:59AM',
		amount: '$1624.18',
		status: 'Unpaid',
		statusClass: 'warning'
	},
	{
		id: 11,
		invoiceId: '#VL25000361',
		img: avatar2,
		name: 'Jennifer Winkel',
		email: 'jenniferwinkal@Conkero.com',
		country: 'Brazil',
		date: '15 Aug, 2021',
		time: '01:05PM',
		amount: '$214.67',
		status: 'Cancel',
		statusClass: 'danger'
	},
	{
		id: 12,
		invoiceId: '#VL25000362',
		name: 'Erik Peters',
		email: 'erikpeters@Conkero.com',
		country: 'Mexico',
		date: '07 Aug, 2021',
		time: '07:46PM',
		amount: '$1798.71',
		status: 'Active',
		statusClass: 'success'
	}
];

const MOCK_DATA = {
	invoiceWidgets,
	invoiceTable
};

export default MOCK_DATA;
