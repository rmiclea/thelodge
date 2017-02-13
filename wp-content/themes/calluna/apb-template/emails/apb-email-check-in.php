<?php
/**
 * Email check in information
 *
 * @package Awebooking
 */

?>

<h6 style="color: #333333; display: inline-block; font-size: 14px; font-weight: bold; line-height: 1.428em; margin: 0 10px 0 0; text-transform: uppercase;">
	<?php esc_html_e( 'Check in', 'awebooking' ); ?>
</h6>

<span style="display: inline-block; font-size: 12px; line-height: 1.428em; vertical-align: middle;" class="apb-option">
	<?php echo esc_html( date_i18n( get_option( 'date_format' ), strtotime( $item['from'] ) ) ); ?>
</span>
